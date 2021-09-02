import React from "react"
import Article from "../news/OnlineConvention"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <Layout pageInfo={{ pageName: "online-convention" }}>
    <SEO title="Online Convention" />
    <Article />
  </Layout>
)

export default Page
