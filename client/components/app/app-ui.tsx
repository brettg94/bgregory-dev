import * as React from 'react'
import styles from './app.module.scss'

export const App = () => {
  React.useEffect(() => {
    console.log('Application loaded')
  }, [])

  return <div className={styles.app}>Hello world</div>
}
