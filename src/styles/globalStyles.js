import { css } from '@emotion/core'
import media from 'utils/media'

export const globalStyles = css`
  /* http://meyerweb.com/eric/tools/css/reset/
 v2.0 | 20110126
 License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    /* stylelint-disable-next-line */
    font: inherit;
    vertical-align: baseline;
  }
  .o-only {
    ${media.s} {
      display: none;
    }
  }
  .s-only {
    display: none;
    ${media.s} {
      display: inherit;
    }
  }
  .m-only {
    display: none ${media.m} {
      display: inherit;
    }
  }

  /* Added to Fix Footer to bottom of viewport */
  html,
  body {
    background: white;
    height: 100%;
  }
  .siteRoot {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  footer {
    width: 100%;
  }

  /* End Fix to Place Footer on Bottom of Viewport */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    font-weight: 400;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:invalid {
      box-shadow: none;
    }
    &:focus {
      outline: 5px auto #5e9ed6;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus,
  body:not(.user-is-tabbing) a:focus {
    outline: none;
  }
  nav a.active span {
    visibility: visible;
  }
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Play&display=swap');
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: white;
    height: 1px !important;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    margin-right: 26px;
    height: 24px;
    width: 24px;
    top: 28px !important;
    right: 15px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: white;
    width: 1px !important;
    height: 24px !important;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    top: 0;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: black;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Individual item */
  .bm-item {
    display: block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: black;
  }
  .mb10 {
    margin-bottom: 10px;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mb30 {
    margin-bottom: 30px;
  }

  .mt30 {
    margin-top: 30px;
  }
  .mb25 {
    margin-bottom: 25px;
  }
  .mb40 {
    margin-bottom: 40px;
  }
  .center {
    text-align: center;
  }
  :root {
    --swiper-theme-color: rgb(241, 126, 1) !important;
  }
`
