import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { globalStyles } from 'styles/globalStyles.js'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Layout = ({ title, description, image, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `
  )

  const defaultImage = site.siteMetadata.siteUrl + site.siteMetadata.image
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || defaultImage

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: `ru`,
          amp: true,
        }}
        title={title}
        defaultTitle={site.siteMetadata.title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
      >
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>{' '}
      <Root className="siteRoot">
        <div className="siteContent">
          <div id="main">{children}</div>
        </div>
        <Global styles={globalStyles} />
      </Root>
    </>
  )
}

export default Layout
