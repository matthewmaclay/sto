import React from 'react'
import Layout from 'components/Layout'

import SEO from 'components/SEO'

import Contacts from 'containers/Contacts'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Контакты | Autohof24" description="Как нас найти?"></SEO>
      <Contacts titlePage="Контакты" />
    </Layout>
  )
}

export default Contact
