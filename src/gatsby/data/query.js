module.exports.data = {
  services: `{
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
