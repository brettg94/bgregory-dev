import { Request, Response } from 'express'

//Forbid indexing by search engines (for now)
const ROBOTS_TXT = `User-agent: *
Disallow: /`

async function serveRobotsTxt(req: Request, res: Response) {
  res.setHeader('Content-Type', 'text/plain')
  res.send(ROBOTS_TXT)
}

export const RobotsTxtMetaHandler = {
  serveRobotsTxt,
  robotsTxtUrl: '/robots.txt'
}
