import { CONTENT_ENDPOINT } from '@Server/endpoints'
import { CoverPage, ExperienceBlock, Project, SkillSection, Tooltip } from '@Server/manager/cms/cms-manager'

async function request<T>(url: string, verb: 'GET'): Promise<T> {
  const requestInit: RequestInit = {
    method: verb,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  const results = await fetch(url, requestInit)

  if (results.status !== 200) {
    throw new Error(`Expected status 200, got status ${results.status}`)
  }

  return await results.json()
}

async function getCoverPage(): Promise<CoverPage> {
  return await request<CoverPage>(CONTENT_ENDPOINT + '/cover-page', 'GET')
}

async function getExperienceBlocks(): Promise<ExperienceBlock[]> {
  return await request<ExperienceBlock[]>(CONTENT_ENDPOINT + '/experience', 'GET')
}

async function getTooltip(identifier: string): Promise<Tooltip> {
  return await request<Tooltip>(CONTENT_ENDPOINT + '/tooltip/' + identifier, 'GET')
}

async function getProjects(): Promise<Project[]> {
  return await request<Project[]>(CONTENT_ENDPOINT + '/projects', 'GET')
}

async function getSkillSectionsWithSkills(): Promise<SkillSection[]> {
  return await request<SkillSection[]>(CONTENT_ENDPOINT + '/skill-sections-with-skills', 'GET')
}

export const API = {
  getCoverPage,
  getExperienceBlocks,
  getTooltip,
  getProjects,
  getSkillSectionsWithSkills
}
