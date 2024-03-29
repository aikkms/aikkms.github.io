import React from "react"
import Article from "../news/Memorandum"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page = () => (
  <Layout pageInfo={{ pageName: "memorandum-to-pm" }}>
    <Seo title="Memorandum to PM" />
    <Article />
  </Layout>
)

export default Page
