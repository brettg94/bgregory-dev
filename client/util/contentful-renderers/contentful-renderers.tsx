import React, { ReactNode } from 'react'
import { Link } from '@mui/material'
import styles from './contentful-renderers.module.scss'
import { BLOCKS, MARKS, Node } from '@contentful/rich-text-types'

/*
This file contains overrides for Contentful's default rich-text React renderers.
Contentful's defaults are usually okay, but some things need modifications.
*/

//Use MUI's link component for hyperlinks, and ensure all links open in a new page by default.
const hyperlink = (node: Node, children: ReactNode) => {
  if (node.data.uri) {
    return <Link href={node.data.uri}>{children}</Link>
  } else {
    return null
  }
}

const embeddedAsset = (node: Node) => {
  const { title, file, description } = node.data.target.fields
  return <img className={styles.richTextImage} src={file.url} title={title} alt={description}></img>
}

//Set of options that can likely be used in most places and don't require niche changes.
const standardOptions = {
  renderNode: {
    hyperlink,
    [BLOCKS.EMBEDDED_ASSET]: embeddedAsset
  },
  renderMark: {
    [MARKS.CODE]: (text: string) => <code className={styles.code}>{text}</code>
  }
}

export const ContentfulRenderers = {
  standardOptions
}
