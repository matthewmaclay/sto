import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

import Appointment from 'containers/Appointment'

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Запись на сервис"
        description="Комплексное обслуживание автомобилей по доступным ценам!"
      >
        <link rel="canonical" href="https://autohof24.ru/online/" />
      </SEO>
      <Appointment titlePage="Запись онлайн" />
    </Layout>
  )
}

export default Contact
