import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import { Tooltip } from '@Server/manager/cms/cms-manager'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import CloseIcon from '@mui/icons-material/Close'
import styles from './tooltip-modal.module.scss'
import { ContentfulRenderers } from '@Client/util/contentful-renderers'

export type Props = {
  tooltip?: Tooltip
  onTooltipClose: () => void
}

export const TooltipModalUI = React.memo((props: Props) => {
  if (!props.tooltip) {
    return null
  }

  return (
    <div className={styles.container}>
      <Dialog open={props.tooltip !== undefined} onClose={props.onTooltipClose}>
        <DialogTitle>
          <div className={styles.titleWithCloseButton}>
            <div>{props.tooltip.title ?? 'More Info:'}</div>
            <IconButton color="info" onClick={props.onTooltipClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>{documentToReactComponents(props.tooltip.content, ContentfulRenderers.standardOptions)}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onTooltipClose} color="info">
            BACK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
})
