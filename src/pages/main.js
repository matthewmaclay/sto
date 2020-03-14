import React from 'react'
import Layout from 'components/Layout'
import Heading from 'components/Heading'
import Text from 'components/Text'
import SEO from 'components/SEO'
import Why from 'containers/Why'
import Hero from 'containers/Hero'

const Contact = ({
  data: {
    contentfulMainPage: { heroImg, title, description },
  },
}) => {
  return (
    <Layout absoluteNav>
      <SEO title="Contact" description="Contact description goes here" />
      <Hero image={heroImg}>
        <Heading className="mb20" type="h1">
          {title}
        </Heading>
        <Text tag="h2" type="20">
          {description}
        </Text>
      </Hero>
      <Why />
    </Layout>
  )
}

export const query = graphql`
  query SiteTitleQuery {
    contentfulMainPage {
      id
      title
      description

      heroImg {
        id
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`

export default Contact
