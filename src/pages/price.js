import React from 'react'
import Layout from 'components/Layout'
const Price = () => (
  <Layout>
    <div
      dangerouslySetInnerHTML={{
        __html: `<iframe style="width:100vw; height:100vh;" src="https://drive.google.com/file/d/1yUNbBG9qfTo1D1xFGV-OhHkpZw6RBSoc/preview" width="640" height="480"></iframe>`,
      }}
    ></div>
  </Layout>
)
export default Price
