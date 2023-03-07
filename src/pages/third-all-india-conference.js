import React from "react"
import Article from "../news/Third-All-India-Conference"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page = () => (
  <Layout pageInfo={{ pageName: "third-all-india-conference" }}>
    <Seo title="Third All India Conference" />
    <Article />
  </Layout>
)

export default Page
