import { CONTENTFUL_MAX_STRING_LENGTH } from '@Server/integrations/contentful/contentful-integration'
import { CMSManager } from '@Server/manager/cms/cms-manager'
import { ExpressMiddleware } from '@Server/middleware'
import { Router, Request, Response } from 'express'

export const contentRouter = Router()

contentRouter.use('*', ExpressMiddleware.setJSONContentType)
contentRouter.get('/cover-page', getCoverPageContent)
contentRouter.get('/experience', getExperienceBlocks)
contentRouter.get('/tooltip/:identifier', getTooltip)
contentRouter.get('/projects', getProjects)
contentRouter.get('/skill-sections-with-skills', getSkillSectionsWithSkills)

async function getCoverPageContent(req: Request, res: Response) {
  try {
    const coverPage = await CMSManager.getCoverPage()
    return res.status(200).send(coverPage)
  } catch (e) {
    console.error(e)
    return res.status(500).send()
  }
}

async function getExperienceBlocks(req: Request, res: Response) {
  try {
    const experienceBlocks = await CMSManager.getExperienceBlocks()
    return res.status(200).send(experienceBlocks)
  } catch (e) {
    console.error(e)
    return res.status(500).send()
  }
}

async function getTooltip(req: Request, res: Response) {
  try {
    const tooltipIdentifier = req.params.identifier
    if (!tooltipIdentifier || tooltipIdentifier.length > CONTENTFUL_MAX_STRING_LENGTH) {
      return res.status(400).send()
    }
    const tooltip = await CMSManager.getTooltip(tooltipIdentifier)
    return res.status(200).send(tooltip)
  } catch (e) {
    console.error(e)
    return res.status(500).send()
  }
}

async function getProjects(req: Request, res: Response) {
  try {
    const projects = await CMSManager.getProjects()
    return res.status(200).send(projects)
  } catch (e) {
    console.error(e)
    return res.status(500).send()
  }
}

async function getSkillSectionsWithSkills(req: Request, res: Response) {
  try {
    const skillSectionsWithSkills = await CMSManager.getSkillSectionsWithSkills()
    return res.status(200).send(skillSectionsWithSkills)
  } catch (e) {
    console.error(e)
    return res.status(500).send()
  }
}
