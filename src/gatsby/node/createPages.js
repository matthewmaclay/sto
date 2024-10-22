const config = require('../../../gatsby-config')
const query = require('../data/query')
const path = require(`path`)
const TR = require('turbo-rss')
const { get } = require('lodash')
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer')

const fs = require('fs')

function fromRichTextToText(richText) {
  if (!richText) return null
  return documentToHtmlString(JSON.parse(richText))
}

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions
  var feed = new TR({
    title: 'Автосервис на Нарвской | Autohof24 | Санкт-Петербург',
    description:
      'Техническое обслуживание автомобилей, замена комплектующих, шиномонтаж. Быстро, качественно, дешево!',
    link: 'https://autohof24.ru/',
  })

  const basePath = config.siteMetadata.basePath || '/'

  // Create a page for each "post"
  const servicesQuery = await graphql(query.data.services)
  const services = servicesQuery.data.allContentfulService.edges
  const defaultImage = servicesQuery.data.contentfulMainPage.heroImg.file.url

  services.forEach((post, i, array) => {
    const service = post.node
    // если услуга заведена как ссылка на категорию не создаем страницу
    if (service.justLink || !service.slug) return null
    feed.item({
      title: service.title,
      image_url: get(service, 'img.file.url') || defaultImage,
      url: `https://autohof24.ru/services/${service.slug}/`,
      content:
        `<div itemscope itemtype="http://schema.org/Rating">
            <meta itemprop="ratingValue" content="9">
            <meta itemprop="bestRating" content="10">
          </div>` +
        fromRichTextToText(get(service, 'description.description')) +
        `
        <button
          formaction="https://autohof24.ru/online"
          data-background-color="#F17E01"
          data-color="white"
          data-turbo="false"
          data-primary="true"
        >
          Записаться на сайте
        </button>
        <h2>Цены на ${service.title}</h2>
        <ul>
          ${
            service.passenger
              ? `<li>Легковой: ${service.passenger} руб. </li>`
              : ''
          }
          ${service.offroad ? `<li>Внедорожник: ${service.offroad} </li>` : ''}
          ${service.bus ? `  <li>Микроавтобус: ${service.bus} </li>` : ''}
        </ul>
      `,
      menu: [
        {
          link: 'http://autohof24.ru/',
          text: 'Главная',
        },
        {
          link: 'http://autohof24.ru/services/',
          text: 'Все услуги',
        },
        {
          link: 'http://autohof24.ru/contacts/',
          text: 'Контакты',
        },
        {
          link: 'http://autohof24.ru/about/',
          text: 'О нас',
        },
      ],
    })
    const slug = service.slug
    createPage({
      path: `${basePath === '/' ? '' : basePath}/${slug}/`,
      component: path.resolve(`./src/templates/service.js`),
      context: {
        slug: slug,
        basePath: basePath === '/' ? '' : basePath,
      },
    })
  })
  fs.writeFile(
    path.resolve(__dirname, '../../../public/turbo.xml'),
    feed.xml(),
    function(err) {
      if (err) {
        return console.log(err, '!!!!')
      }
      console.log('The file was saved!')
    }
  )
}
