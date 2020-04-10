import React from 'react'
import Layout from 'components/Layout'
import Heading from 'components/Heading'
import Text from 'components/Text'
import SEO from 'components/SEO'
import Button from 'components/Button'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

import Why from 'containers/Why'
import Hero from 'containers/Hero'
import Info from 'containers/Info'
import Services from 'containers/Services'
import Appointment from 'containers/Appointment'
import Gallery from 'containers/Gallery'
import Contacts from 'containers/Contacts'
import AnchorLink from 'react-anchor-link-smooth-scroll'

/* eslint-disable react/no-unknown-property, no-console */
const Contact = ({
  data: {
    site: {
      siteMetadata: { siteUrl },
    },
    contentfulMainPage: { heroImg, title, description },
  },
}) => {
  return (
    <Layout absoluteNav>
      <SEO
        title="Автосервис на Нарвской"
        description="Комплексное обслуживание автомобилей по доступным ценам!"
      >
        <link rel="canonical" href={siteUrl} />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/css/swiper.min.css"
        ></link>
      </SEO>

      <Hero image={heroImg}>
        <Heading className="mb20" type="h1">
          {title}
        </Heading>
        <Text
          className="mb30"
          tag="h2"
          type="20"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></Text>
        <AnchorLink href="#form">
          <Button
            onClick={() =>
              trackCustomEvent({
                category: 'Главная',
                action: 'Клик по первой кнопке',
              })
            }
          >
            Узнать стоимость ТО
          </Button>
        </AnchorLink>
      </Hero>
      <Why />
      <Services />
      <Info />
      <Gallery />
      <div id="form"></div>
      <Appointment />
      <Contacts lazy />
    </Layout>
  )
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    contentfulMainPage {
      id
      title
      description
      heroImg {
        id
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Contact
