import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, children }) => {
  const { site, contentfulMainPage } = useStaticQuery(
    graphql`
      query {
        contentfulMainPage {
          heroImg {
            file {
              url
            }
          }
        }
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

  const defaultImage = contentfulMainPage.heroImg.file.url
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || defaultImage

  return (
    <Helmet
      htmlAttributes={{
        lang: `ru`,
        prefix: 'og: http://ogp.me/ns#',
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* General tags */}
      <meta name="image" content={image} />
      <meta name="description" content={metaDescription} />
      <meta name="yandex-verification" content="387cf7c725a4512d" />
      <meta
        name="google-site-verification"
        content="JzzPQcJYEQ-K7a3lLMLU46HFuw0o5Ks837xlEqkqIQE"
      />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:description" content={metaDescription} />

      {children}
    </Helmet>
  )
}

export default SEO
