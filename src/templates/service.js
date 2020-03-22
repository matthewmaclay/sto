import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import ServicePage from 'containers/ServicePage'
import { titlePosfix } from 'utils/common'

const ServiceTemplate = ({ data: { contentfulService } }) => {
  return (
    <Layout>
      <SEO
        title={contentfulService.title + titlePosfix}
        description={`${contentfulService.title}. Сделаем быстро, качественно, дешего! Санкт-Петербург, метро Нарвская. Сегодня акции.`}
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
