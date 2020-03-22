const config = require('../../../gatsby-config')
const query = require('../data/query')
const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const TR = require('turbo-rss')
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer')

const fs = require('fs')

function fromRichTextToText(richText) {
  if (!richText) return null
  return documentToHtmlString(JSON.parse(richText))
}

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions
  console.log('!!!!!!!')
  var feed = new TR({
    title: 'title',
    description: 'description',
    link: 'https://autohof24.ru/',
  })

  const basePath = config.siteMetadata.basePath || '/'

  // Create a page for each "post"
  const servicesQuery = await graphql(query.data.services)
  const services = servicesQuery.data.allContentfulService.edges
  /*
  
   id
          slug
          passenger
          offroad
          bus
          title
          description{
            description
          }
          img {
            file {
              url
            }
          }
  */
  services.forEach((post, i, array) => {
    const service = post.node

    feed.item({
      title: service.title,
      image_url: service.img ? service.img.file.url : undefined,
      url: `https://autohof24.ru/services/${service.slug}/`,
      content:
        `<div itemscope itemtype="http://schema.org/Rating">
            <meta itemprop="ratingValue" content="9">
            <meta itemprop="bestRating" content="10">
          </div>` +
        fromRichTextToText(service.description.description) +
        `
        <button
          formaction="https://autohof24/online"
          data-background-color="#F17E01"
          data-color="white"
          data-turbo="false"
          data-primary="true"
        >
          Записаться на сайте
        </button>
        <h2>Цены на ${service.title}</h2>
        <ul>
          <li>Легковой: ${service.passenger || 0}</li>
          <li>Внедорожник: ${service.offroad || 0}</li>
          <li>Микроавтобус: ${service.bus || 0}</li>
        </ul>
      `,
      menu: [
        {
          link: 'http://autohof.ru/',
          text: 'Главная',
        },
        {
          link: 'http://autohof.ru/services/',
          text: 'Все услуги',
        },
        {
          link: 'http://autohof.ru/contacts/',
          text: 'Контакты',
        },
        {
          link: 'http://autohof.ru/about/',
          text: 'О нас',
        },
      ],
      related: array
        .filter(item => item.node.id !== service.id)
        .map(i => ({
          link: `https://autohof24.ru/services/${i.node.slug}/`,
          image_url: i.node.img && i.node.img.file.url,
          text: i.node.title,
        })),
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
