import { ExpressMiddleware } from '@Server/middleware'
import { Request, Response, NextFunction } from 'express'

//Maintainable approach to handling differing dependencies between environments.

//Type to store the shape of the server config object
export type ServerEnvironmentConfig = {
  httpsEnforcer: (req: Request, res: Response, next: NextFunction) => void
}

const production: ServerEnvironmentConfig = {
  httpsEnforcer: ExpressMiddleware.forceHTTPS
}

const development: ServerEnvironmentConfig = {
  httpsEnforcer: ExpressMiddleware.pass
}

export const ServerEnvironmentConfig = {
  production,
  development
}
