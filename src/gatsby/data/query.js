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
