import { CMSManager } from '@Server/manager/cms/cms-manager'
import { ExpressMiddleware } from '@Server/middleware'
import { Router, Request, Response } from 'express'

export const contentRouter = Router()

contentRouter.use('*', ExpressMiddleware.setJSONContentType)
contentRouter.get('/cover-page', getCoverPageContent)

async function getCoverPageContent(req: Request, res: Response) {
  try {
    const coverPage = await CMSManager.getCoverPage()
    res.status(200).send(coverPage)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
