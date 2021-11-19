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

const defaultLazyLoadProps: LazyLoadProps = {
  height: '100vh',
  offset: -5,
  resize: true,
  once: true
}

export const App = React.memo(() => {
  React.useEffect(() => {
    console.log('Application loaded!')
  }, [])

  return (
    <ThemeProvider theme={MUI_THEME}>
      <div className={styles.app}>
        <CoverPage />
        {/* Utilizing the react-lazyload library to defer mounting of components (and thus API calls) that aren't in view */}
        <LazyLoad {...defaultLazyLoadProps}>
          <ExperiencePage />
        </LazyLoad>
        <LazyLoad {...defaultLazyLoadProps}>
          <ProjectsPage />
        </LazyLoad>
        <LazyLoad {...defaultLazyLoadProps}>
          <SkillsPage />
        </LazyLoad>
        <ContactPage />
      </div>
      <TooltipModal />
    </ThemeProvider>
  )
})
