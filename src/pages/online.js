import React from 'react'
import Layout from 'components/Layout'
import Heading from 'components/Heading'
import Text from 'components/Text'
import SEO from 'components/SEO'
import Button from 'components/Button'

import Contacts from 'containers/Contacts'
import Appointment from 'containers/Appointment'

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Автосервис на Нарвской"
        description="У нас вы можете пройти ТО, поменять шины или покрасить корпус"
      ></SEO>
      <Appointment titlePage="Запись онлайн" />
    </Layout>
  )
}

export default Contact
