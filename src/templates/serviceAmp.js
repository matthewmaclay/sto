import React from 'react'
import Helmet from 'react-helmet'
const ServiceTemplate = ({ data: { contentfulService } }) => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang: `ru`,
          huj: `ru`,
          a: 'true',
        }}
      >
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta name="description" content="This is the AMP Boilerplate." />
        <link
          rel="preload"
          as="script"
          href="https://cdn.ampproject.org/v0.js"
        />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        ></script>
        <style amp-custom>/* Add your styles here */</style>

        <link rel="canonical" href="." />
        <title>My AMP Page</title>
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Webpage',
            url: 'https://www.example.com',
            name: 'My Webpage',
            headline: 'webpage title',
            description: 'Here is the description',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.example.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'The Publisher',
              logo: {
                url: 'https://www.example.com/logo-blue.svg',
                width: 175,
                height: 60,
                '@type': 'ImageObject',
              },
            },
            image: {
              '@type': 'ImageObject',
              url: 'https://www.example.com/leader.png',
              width: 1200,
              height: 630,
            },
          })}
        </script>
      </Helmet>
      <h1>Hello World</h1>
      <amp-analytics type="gtag" data-credentials="include">
        <script type="application/json">
          {JSON.stringify({
            vars: {
              gtag_id: 'UA-XXXXX-Y',
              config: {
                'UA-XXXXX-Y': {
                  groups: 'default',
                },
              },
            },
          })}
        </script>
      </amp-analytics>
    </React.Fragment>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
      id
      description {
        description
      }
      passenger
      bus
      title
      offroad
      img {
        fluid(maxWidth: 900) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ServiceTemplate
