import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import glob from 'glob'
import path from 'path'
import { ServerEnvironmentConfig } from './config'
import { contentRouter } from './controller/content/content-controller'
import { CONTENT_ENDPOINT } from './endpoints'
import { RobotsTxtMetaHandler } from './meta/robots-txt/robots-txt'

const app = express()
const router = express.Router()

export function startServer(config: ServerEnvironmentConfig) {
  const JS_MAIN_FILENAME = glob.sync('main-*.js', { cwd: './dist/public/' })[0]
  const CSS_MAIN_FILENAME = glob.sync('main-*.css', { cwd: './dist/public/' })[0]

  const CDN_URL = process.env.CDN_URL ?? ''

  const port = process.env.PORT ? Number(process.env.PORT) : 3000
  logFileLoadResult(JS_MAIN_FILENAME, 'JavaScript')
  logFileLoadResult(CSS_MAIN_FILENAME, 'CSS')

  app.enable('trust proxy') //Play nice with Heroku

  //Force HTTPS if running in production, otherwise don't enforce
  app.use('*', config.httpsEnforcer)

  app.use(express.static('./dist/public'))

  app.get(RobotsTxtMetaHandler.robotsTxtUrl, RobotsTxtMetaHandler.serveRobotsTxt)

  app.set('view engine', 'pug')
  app.set('views', path.resolve('.') + '/views')

  router.get('*', async (req, res) => {
    res.render('index.pug', {
      reactEntryId: 'entry',
      cdnUrl: CDN_URL,
      jsRoot: CDN_URL + '/' + JS_MAIN_FILENAME,
      cssRoot: CDN_URL + '/' + CSS_MAIN_FILENAME
    })
  })

  app.use(`${CONTENT_ENDPOINT}`, contentRouter)
  app.use('/', router)

  return app.listen(port, () => {
    console.log('Running on port', port)
  })
}

function logFileLoadResult(fileName: string, fileType: 'JavaScript' | 'CSS') {
  if (fileName) {
    console.log(`${fileType} loaded:`, fileName)
  } else {
    console.error(`${fileType} failed to load!`)
  }
}

startServer(ServerEnvironmentConfig.getConfig(process.env.NODE_ENV))
