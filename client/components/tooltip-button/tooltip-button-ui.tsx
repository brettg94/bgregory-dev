import React from 'react'
import { IconButton } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import styles from './tooltip-button.module.scss'

export type Props = {
  identifier: string
  dispatchTooltipFetch: () => void
  margin?: { left?: boolean; right?: boolean }
}

const MARGIN_SIZE = '8px'

export const TooltipButtonUI = (props: Props) => {
  const computedMargins = {
    marginLeft: props.margin?.left ? MARGIN_SIZE : undefined,
    marginRight: props.margin?.right ? MARGIN_SIZE : undefined
  }
  return (
    <div style={computedMargins} className={styles.container}>
      <IconButton onClick={props.dispatchTooltipFetch} size="small">
        <HelpOutlineIcon fontSize="small" />
      </IconButton>
    </div>
  )
}
