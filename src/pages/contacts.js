import React from 'react'
import Layout from 'components/Layout'
import Heading from 'components/Heading'
import Text from 'components/Text'
import SEO from 'components/SEO'
import Button from 'components/Button'

import Why from 'containers/Why'
import Hero from 'containers/Hero'
import Contacts from 'containers/Contacts'
import Services from 'containers/Services'
import Appointment from 'containers/Appointment'
import Gallery from 'containers/Gallery'

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Автосервис на Нарвской"
        description="У нас вы можете пройти ТО, поменять шины или покрасить корпус"
      ></SEO>
      <Contacts titlePage="Контакты" />
    </Layout>
  )
}

export default Contact
