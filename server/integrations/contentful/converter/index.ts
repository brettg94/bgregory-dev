import { convertAsset } from './contentful-asset-converter/contentful-asset-converter'
import { convertContactDetails } from './contentful-contact-details-converter/contentful-contact-details-converter'
import { convertCoverPage } from './contentful-cover-page-converter/contentful-cover-page-converter'
import { convertExperienceBlock } from './contentful-experience-block-converter/contentful-experience-block-converter'
import { convertProject } from './contentful-project-converter/contentful-project-converter'
import { convertSkill } from './contentful-skill-converter/contentful-skill-converter'
import { convertSkillSection } from './contentful-skill-section-converter/contentful-skill-section-converter'
import { convertTooltip } from './contentful-tooltip-converter/contentful-tooltip-converter'

export const ContentfulConverter = {
  convertAsset,
  convertCoverPage,
  convertExperienceBlock,
  convertTooltip,
  convertProject,
  convertSkill,
  convertSkillSection,
  convertContactDetails
}
