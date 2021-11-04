import { Request, Response, NextFunction } from 'express'

export function pass(req: Request, res: Response, next: NextFunction): void {
  next()
}

export function setJSONContentType(_req: Request, res: Response, next: NextFunction): void {
  res.setHeader('Content-Type', 'application/json')
  next()
}
