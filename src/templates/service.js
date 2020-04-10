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
        <link
          rel="canonical"
          href={`https://autohof24.ru/services/${contentfulService.slug}/`}
        />
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
      slug
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
