import * as React from 'react'
import { CoverPage } from '../cover-page/cover-page-container'
import styles from './app.module.scss'
import { ThemeProvider } from '@mui/system'
import { MUI_THEME } from '@Client/styles/mui-styles'
import { ExperiencePage } from '../experience-page/experience-page-container'
import LazyLoad, { LazyLoadProps } from 'react-lazyload'
import { TooltipModal } from '../tooltip-modal/tooltip-modal-container'
import { ProjectsPage } from '../projects-page/projects-page-container'
import { SkillsPage } from '../skills-page/skills-page-container'
import { ContactPage } from '../contact-page/contact-page-container'
import { PageIndex } from '@Client/redux/redux'

export type Props = {
  highestPageLoaded: number
}

const defaultLazyLoadProps = {
  height: '100vh',
  offset: -5,
  resize: true
}

export const AppUI = (props: Props) => {
  React.useEffect(() => {
    console.log('Application loaded')
  }, [])

  return (
    <ThemeProvider theme={MUI_THEME}>
      <div className={styles.app}>
        <CoverPage />
        {/* Utilizing the react-lazyload library to defer mounting of components (and thus API calls) that aren't in view */}
        {conditionallyLazyLoadComponent(<ExperiencePage />, PageIndex.EXPERIENCE_PAGE, props.highestPageLoaded, defaultLazyLoadProps)}
        {conditionallyLazyLoadComponent(<ProjectsPage />, PageIndex.PROJECTS_PAGE, props.highestPageLoaded, defaultLazyLoadProps)}
        {conditionallyLazyLoadComponent(<SkillsPage />, PageIndex.SKILLS_PAGE, props.highestPageLoaded, defaultLazyLoadProps)}
        <ContactPage />
      </div>
      <TooltipModal />
    </ThemeProvider>
  )
}

//If the page is loaded where the scroll isn't at the very top, horrible content pop-in with the viewport jumping all over happens.
//This mitigates that by detecting roughly how far down the user is, and mounting all components behind it if there's an inconsistency detected.
const conditionallyLazyLoadComponent = (component: JSX.Element, pageIndex: number, highestPageLoaded: number, lazyLoadProps?: LazyLoadProps): JSX.Element => {
  if (pageIndex < highestPageLoaded) {
    return component
  }
  return <LazyLoad {...lazyLoadProps}>{component}</LazyLoad>
}
