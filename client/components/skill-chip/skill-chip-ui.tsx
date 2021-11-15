import React from 'react'
import { Chip } from '@mui/material'
import { Skill } from '@Server/manager/cms/cms-manager'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import styles from './skill-chip.module.scss'

export type Props = Skill & {
  dispatchTooltipFetch: () => void
}

export const SkillChipUI = (props: Props) => {
  const tooltipOnClick = props.tooltipIdentifier ? props.dispatchTooltipFetch : undefined
  const icon = props.tooltipIdentifier ? <HelpOutlineIcon fontSize="small" /> : undefined
  return <Chip sx={{ m: '4px' }} className={styles.container} icon={icon} color="primary" label={props.title} onClick={tooltipOnClick}></Chip>
}
