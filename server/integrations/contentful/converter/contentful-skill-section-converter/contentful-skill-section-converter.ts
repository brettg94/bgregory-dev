import { SkillSection } from '@Server/manager/cms/cms-manager'
import { Entry } from 'contentful'
import { ContentfulSkill, convertSkill } from '../contentful-skill-converter/contentful-skill-converter'

type ContentfulSkillSection = {
  title: string
  skills: Entry<ContentfulSkill>[]
  displayPriority: number
}

export function convertSkillSection(entry: Entry<ContentfulSkillSection>): SkillSection {
  return {
    title: entry.fields.title,
    skills: entry.fields.skills.map((skill) => convertSkill(skill)),
    displayPriority: entry.fields.displayPriority
  }
}
