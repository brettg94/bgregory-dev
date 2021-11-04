import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import glob from 'glob'
import path from 'path'
import { ServerEnvironmentConfig } from './config'

const app = express()
const router = express.Router()

export function startServer(config: ServerEnvironmentConfig) {
  const JS_MAIN_FILENAME = glob.sync('main.js', { cwd: './dist/public/' })[0]
  const CSS_MAIN_FILENAME = glob.sync('main.css', { cwd: './dist/public/' })[0]
  const port = process.env.PORT ? Number(process.env.PORT) : 3000
  logFileLoadResult(JS_MAIN_FILENAME, 'JavaScript')
  logFileLoadResult(CSS_MAIN_FILENAME, 'CSS')

  app.enable('trust proxy') //Play nice with Heroku

  //Force HTTPS if running in production, otherwise don't enforce
  app.use('*', config.httpsEnforcer)

  app.use(express.static('./dist/public'))

  app.set('view engine', 'pug')
  app.set('views', path.resolve('.') + '/views')

  router.get('*', async (req, res) => {
    res.render('index.pug', {
      reactEntryId: 'entry',
      jsRoot: JS_MAIN_FILENAME,
      cssRoot: CSS_MAIN_FILENAME
    })
  })

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

startServer(process.env.NODE_ENV === 'production' ? ServerEnvironmentConfig.production : ServerEnvironmentConfig.development)
