import React from 'react'
import { IconButton } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import styles from './tooltip-button.module.scss'

export type Props = {
  identifier: string
  dispatchTooltipFetch: () => void
}

export const TooltipButtonUI = (props: Props) => {
  return (
    <div className={styles.container}>
      <IconButton onClick={props.dispatchTooltipFetch} size="small">
        <HelpOutlineIcon fontSize="small" />
      </IconButton>
    </div>
  )
}
