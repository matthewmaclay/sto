module.exports = {
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
    {
        site {
            siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
            }
        }
    }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allContentfulService } }) => {
          return allContentfulService.edges.map(edge => {
            return {
              description: 'descriptio',
              date: 'edge.node.frontmatter.date',
              url: 'site.siteMetadata.siteUrl + edge.node.fields.slug',
              guid: 'site.siteMetadata.siteUrl + edge.node.fields.slug,',
            }
          })
        },
        query: `
        {
            allContentfulService {
                edges {
                  node {
                    id
                    slug
                    passenger
                    offroad
                    bus
                    title
                    description{
                      description
                    }
                  }
                }
              }
        }
        `,
        output: '/rss.xml',
        title: "Your Site's RSS Feed",

        // optional configuration to specify external rss feed, such as feedburner
        link: 'https://feeds.feedburner.com/gatsby/blog',
      },
    ],
  },
}
