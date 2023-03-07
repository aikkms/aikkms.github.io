import React from "react"
import Article from "../news/SKMMeeting"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page = () => (
  <Layout pageInfo={{ pageName: "proposal-of-aikkms-skm-meeting" }}>
    <Seo title="AIKKMS SKM Meeting" />
    <Article />
  </Layout>
)

export default Page
