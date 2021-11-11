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
      return <iframe src={props.gfycatEmbed} width="100%" height="100%"></iframe>
    } else if (props.primaryImage) {
      return (
        <LazyLoad height={'400px'} offset={10}>
          <img className={styles.image} src={props.primaryImage.url} title={props.primaryImage.title} alt={props.primaryImage.description}></img>
        </LazyLoad>
      )
    }
    return null
  }

  return (
    <div className={styles.container}>
      <Paper elevation={2} className={styles.paper}>
        <div className={styles.interior}>
          <LazyLoad height={'80px'} offset={10}>
            <img className={styles.logo} src={props.logo.url} title={props.logo.title} alt={props.logo.description}></img>
          </LazyLoad>
          <div>
            <div className={styles.header}>
              <LinkIcon className={styles.linkIcon} fontSize="small" /> <Link href={props.url}>{props.title}</Link>
            </div>
            <div>{documentToReactComponents(props.description)}</div>
          </div>
        </div>
        {getImageOrGfycatEmbed()}
      </Paper>
    </div>
  )
})
