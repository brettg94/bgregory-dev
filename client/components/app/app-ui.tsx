import * as React from 'react'
import { CoverPage } from '../cover-page/cover-page-container'
import styles from './app.module.scss'
import { ThemeProvider } from '@mui/system'
import { MUI_THEME } from '@Client/styles/mui-styles'
import { ExperiencePage } from '../experience-page/experience-page-container'
import LazyLoad from 'react-lazyload'

export const App = () => {
  React.useEffect(() => {
    console.log('Application loaded')
  }, [])

  return (
    <ThemeProvider theme={MUI_THEME}>
      <div className={styles.app}>
        <CoverPage />
        {/* Utilizing the react-lazyload library to defer mounting of components (and thus API calls) that aren't in view */}
        <LazyLoad height={'100vh'} offset={-10} resize={true}>
          <ExperiencePage />
        </LazyLoad>
      </div>
    </ThemeProvider>
  )
}
