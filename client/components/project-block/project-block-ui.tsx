import React from 'react'
import { Link, Paper } from '@mui/material'
import { Project } from '@Server/manager/cms/cms-manager'
import LazyLoad from 'react-lazyload'
import LinkIcon from '@mui/icons-material/Link'
import styles from './project-block.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type Props = Project

export const ProjectBlock = React.memo((props: Props) => {
  const getImageOrGfycatEmbed = () => {
    if (props.gfycatEmbed) {
      return (
        <div className={styles.mediaContainer}>
          <iframe className={styles.gfycatEmbed} src={props.gfycatEmbed}></iframe>
        </div>
      )
    } else if (props.primaryImage) {
      return (
        <div className={styles.mediaContainer}>
          <img className={styles.image} src={props.primaryImage.url} title={props.primaryImage.title} alt={props.primaryImage.description}></img>
        </div>
      )
    }
    return null
  }

  const getHeader = () => {
    if (props.url) {
      return (
        <>
          <LinkIcon className={styles.linkIcon} fontSize="small" /> <Link href={props.url}>{props.title}</Link>
        </>
      )
    }
    return <span className={styles.noLinkHeaderTitle}>{props.title}</span>
  }

  return (
    <div className={styles.container}>
      <Paper elevation={2} className={styles.paper}>
        <div className={styles.interior}>
          <div className={styles.headerRow}>
            <img className={styles.logo} src={props.logo.url} title={props.logo.title} alt={props.logo.description}></img>
            <span className={styles.header}>{getHeader()}</span>
          </div>
          <div>{documentToReactComponents(props.description)}</div>
        </div>
        <hr className={styles.hr} />
        {getImageOrGfycatEmbed()}
      </Paper>
    </div>
  )
})
