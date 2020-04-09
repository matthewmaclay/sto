module.exports.data = {
  services: `{
    contentfulMainPage {
      heroImg {
        file {
          url
        }
      }
    }
    allContentfulService {
      edges {
        node {
          id
          slug
          passenger
          offroad
          bus
          title
          justLink
          description{
            description
          }
          img {
            file {
              url
            }
          }
        }
      }
    }
  }`,
}
