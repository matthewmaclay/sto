import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Menu from 'components/Menu'
import Footer from 'containers/Footer'
import { globalStyles } from 'styles/globalStyles.js'
import { useStaticQuery, graphql } from 'gatsby'
import { YMInitializer } from 'react-yandex-metrika'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
  .accent {
    color: ${props => props.theme.colors.orange};
  }
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`
/* eslint-disable react/no-unknown-property, no-console */
const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])
  const { contentfulMainPage } = useStaticQuery(
    graphql`
      query {
        contentfulMainPage {
          addressString
          phone
          heroImg {
            file {
              url
            }
          }
        }
      }
    `
  )
  return (
    <Root className="siteRoot">
      <div itemscope="true" itemtype="http://schema.org/Service">
        <meta itemprop="serviceType" content="Автосервис" />

        <div className="siteContent">
          <Menu.default absolute={props.absoluteNav} />
          <div id="main">{props.children}</div>
        </div>
        <Footer />
        <Global styles={globalStyles} />
        <YMInitializer
          options={{ webvisor: true, defer: true }}
          accounts={[61192993]}
        />
      </div>
    </Root>
  )
}

export default Layout