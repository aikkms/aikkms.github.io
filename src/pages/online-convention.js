import React from "react"
import Article from "../news/OnlineConvention"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page = () => (
  <Layout pageInfo={{ pageName: "online-convention" }}>
    <Seo title="Online Convention" />
    <Article />
  </Layout>
)

export default Page
