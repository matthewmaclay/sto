import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Info from 'containers/Info'
import Gallery from 'containers/Gallery'

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="О нас | Autohof24"
        description="У нас вы можете пройти ТО, поменять шины или покрасить корпус"
      >
        <link rel="canonical" href="https://autohof24.ru/about/" />
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
