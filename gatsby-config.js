const plugins = require('./plugins')

let contentfulConfig
try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    title: 'Autohof 24',
    description:
      'Лучший автосервис на Нарвской по адресу Старо-Петергофский проспект 20, к.3',
    siteUrl: 'https://autohof24.ru',
    image: '/images/share.jpg',
    basePath: '/services',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {
        name: 'Contact',
        slug: '/contact/',
      },
    ],
  },
  plugins: [
    ...plugins,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Autohof24 | Автосервис на Нарвской',
        short_name: 'AutoHof24',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: './static/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `./src/gatsby/schema/schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
