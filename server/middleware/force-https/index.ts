import { Request, Response, NextFunction } from 'express'

export function forceHTTPS(req: Request, res: Response, next: NextFunction): void {
  if (req.headers['x-forwarded-proto'] === 'https' || req.protocol === 'https') {
    next()
  } else {
    res.redirect('https://' + req.hostname + req.url)
  }
}
