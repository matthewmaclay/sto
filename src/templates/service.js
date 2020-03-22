import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import ServicePage from 'containers/ServicePage'

const ServiceTemplate = ({ data: { contentfulService } }) => {
  return (
    <Layout>
      <SEO
        title={contentfulService.title}
        description={`${contentfulService.title} быстро, качественно, дешего!`}
      >
        {' '}
      </SEO>
      <ServicePage {...contentfulService} />
    </Layout>
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
