require('dotenv').config()
import express from 'express'

const app = express()

export function startServer() {
  const port = process.env.PORT ? Number(process.env.PORT) : 3000

  return app.listen(port, () => {
    console.log('Running on port', port)
  })
}

startServer()
