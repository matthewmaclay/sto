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
import Gallery from 'containers/Gallery'
import Contacts from 'containers/Contacts'

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Автосервис на Нарвской"
        description="У нас вы можете пройти ТО, поменять шины или покрасить корпус"
      >
        {' '}
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/css/swiper.min.css"
        ></link>
      </SEO>
      <Info titlePage="О нас" />
      <Gallery />
    </Layout>
  )
}

export default Contact
