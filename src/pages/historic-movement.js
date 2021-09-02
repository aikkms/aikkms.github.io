import React from "react"
import HistoricMovement from "../articles/HistoricMovement"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "historic-peasants-movement" }}>
    <SEO title="Historic Movement" />
    <HistoricMovement />
  </Layout>
)

export default SecondPage
