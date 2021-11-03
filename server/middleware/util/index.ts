import { Request, Response, NextFunction } from 'express'

export function pass(req: Request, res: Response, next: NextFunction): void {
  next()
}
