import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Menu from 'components/Menu'
import Footer from 'containers/Footer'
import { globalStyles } from 'styles/globalStyles.js'
import { useStaticQuery, graphql } from 'gatsby'

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
        <div
          dangerouslySetInnerHTML={{
            __html: `<!-- Yandex.Metrika counter -->
              <script type="text/javascript" >
                 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                 m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
                 ym(61192993, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                 });
              </script>
              <noscript><div><img src="https://mc.yandex.ru/watch/61192993" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
              <!-- /Yandex.Metrika counter -->`,
          }}
        ></div>
        <meta itemprop="serviceType" content="Автосервис" />

        <div className="siteContent">
          <Menu.default absolute={props.absoluteNav} />
          <div id="main">{props.children}</div>
        </div>
        <Footer />
        <Global styles={globalStyles} />
      </div>
    </Root>
  )
}

export default Layout
