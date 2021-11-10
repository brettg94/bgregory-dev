import { Modal } from '@mui/material'
import { Tooltip } from '@Server/manager/cms/cms-manager'
import React from 'react'
import styles from './modpath.module.scss'

export type Props = {
  tooltip: Tooltip
}

export const TooltipModalUI = React.memo((props: Props) => {
  return (
    <div className={styles.container}>
      <Modal open={true} onClose={() => {}}>
        <p>Hello I am a modal</p>
      </Modal>
    </div>
  )
})
