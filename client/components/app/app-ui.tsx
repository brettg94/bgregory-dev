import * as React from 'react'
import { CoverPage } from '../cover-page/cover-page-container'
import styles from './app.module.scss'
import { ThemeProvider } from '@mui/system'
import { MUI_THEME } from '@Client/styles/mui-styles'
import { ExperiencePage } from '../experience-page/experience-page-container'

export const App = () => {
  React.useEffect(() => {
    console.log('Application loaded')
  }, [])

  return (
    <ThemeProvider theme={MUI_THEME}>
      <div className={styles.app}>
        <CoverPage />
        <ExperiencePage />
      </div>
    </ThemeProvider>
  )
}
