require('dotenv').config()
const AWS = require('aws-sdk')
const mime = require('mime-types')
const path = require('path')
const BUILD_DIR = path.resolve(__dirname, './dist/public')
const fs = require('fs')

const s3 = new AWS.S3()

configure()
run()

function run() {
  fs.readdir(BUILD_DIR, function (err, files) {
    if (err) {
      console.log('Could not list the directory.', err)
      process.exit(1)
    }

    console.log('Found files:')
    console.log(files)

    var numFiles = files.length

    if (numFiles) {
      for (i = 0; i < numFiles; i++) {
        read(files[i])
      }
    }
  })
}

function read(file) {
  fs.readFile(BUILD_DIR + '/' + file, function (err, data) {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    var base64data = Buffer.from(data, 'binary')

    const mimeType = mime.lookup(file)
    console.log('Uploading', file, 'to', process.env.CDN_BUCKET_NAME, ' with mimetype', mimeType)
    s3.putObject(
      {
        Bucket: process.env.CDN_BUCKET_NAME,
        Key: file,
        Body: base64data,
        ACL: 'public-read',
        ContentType: mimeType ? mimeType : undefined,
        CacheControl: 'max-age=172800'
      },
      function (error) {
        if (!error) {
          console.log('Successfully uploaded', file)
        } else {
          console.log('Error uploading', file, error.code)
        }
      }
    )
  })
}

function configure() {
  if (!process.env.CDN_URL || !process.env.CDN_BUCKET_NAME) {
    console.log('CDN Upload: No CDN URL or target bucket specified, upload aborted.')
    process.exit(0)
  }

  if (!process.env.AWS_REGION) {
    console.log('CDN Upload: No AWS region specified, upload aborted.')
    process.exit(0)
  }

  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    console.log('CDN Upload: Missing credentials, upload aborted.')
    process.exit(0)
  }

  AWS.config.update({ region: process.env.AWS_REGION })
  AWS.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY })
}
