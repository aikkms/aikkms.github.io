import React from "react"
import Article from "../news/Memorandum"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <Layout pageInfo={{ pageName: "memorandum-to-pm" }}>
    <SEO title="Memorandum to PM" />
    <Article />
  </Layout>
)

export default Page
