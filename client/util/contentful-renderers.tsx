import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link } from '@mui/material'

/*
This file contains overrides for Contentful's default rich-text React renderers.
Contentful's defaults are usually okay, but some things need modifications.
*/

//Use MUI's link component for hyperlinks, and ensure all links open in a new page by default.
const hyperlink = (node: any) => {
  if (node.data.uri) {
    return (
      <Link href={node.data.uri} target="_blank">
        {documentToReactComponents(node.content[0])}
      </Link>
    )
  } else {
    return null
  }
}

//Set of options that can likely be used in most places and don't require niche changes.
const standardOptions = {
  renderNode: {
    hyperlink
  }
}

export const ContentfulRenderers = {
  standardOptions
}
