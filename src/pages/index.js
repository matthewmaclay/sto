import React from 'react'
import Layout from 'components/Layout'
import Heading from 'components/Heading'
import Text from 'components/Text'
import SEO from 'components/SEO'
import Button from 'components/Button'

import Why from 'containers/Why'
import Hero from 'containers/Hero'
import Info from 'containers/Info'
import Services from 'containers/Services'
import Appointment from 'containers/Appointment'

const Contact = ({
  data: {
    contentfulMainPage: { heroImg, title, description },
  },
}) => {
  return (
    <Layout absoluteNav>
      <SEO
        title="Автосервис на Нарвской"
        description="У нас вы можете пройти ТО, поменять шины или покрасить корпус"
      />
      <Hero image={heroImg}>
        <Heading className="mb20" type="h1">
          {title}
        </Heading>
        <Text className="mb30" tag="h2" type="20">
          {description}
        </Text>
        <Button>Узнать стоимость ТО</Button>
      </Hero>
      <Why />
      <Services />
      <Info />
      <Appointment />
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
