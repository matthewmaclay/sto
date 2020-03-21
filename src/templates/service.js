import React from 'react'
import Layout from 'components/Layout'
import Heading from 'components/Heading'
import Text from 'components/Text'
import SEO from 'components/SEO'
import Button from 'components/Button'

import ServicePage from 'containers/ServicePage'

import Info from 'containers/Info'
import Services from 'containers/Services'
import Appointment from 'containers/Appointment'
import Gallery from 'containers/Gallery'
import Contacts from 'containers/Contacts'

const ServiceTemplate = ({ data: { contentfulService } }) => {
  return (
    <Layout>
      <SEO
        title="Автосервис на Нарвской"
        description="У нас вы можете пройти ТО, поменять шины или покрасить корпус"
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
