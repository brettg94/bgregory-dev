import { CMSManager } from '@Server/manager/cms/cms-manager'
import { ExpressMiddleware } from '@Server/middleware'
import { Router, Request, Response } from 'express'

export const contentRouter = Router()

contentRouter.use('*', ExpressMiddleware.setJSONContentType)
contentRouter.get('/cover-page', getCoverPageContent)
contentRouter.get('/experience', getExperienceBlocks)

async function getCoverPageContent(req: Request, res: Response) {
  try {
    const coverPage = await CMSManager.getCoverPage()
    res.status(200).send(coverPage)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}

async function getExperienceBlocks(req: Request, res: Response) {
  try {
    const experienceBlocks = await CMSManager.getExperienceBlocks()
    res.status(200).send(experienceBlocks)
  } catch (e) {
    console.error(e)
    res.status(500).send()
  }
}
