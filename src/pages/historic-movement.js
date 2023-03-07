import React from "react"
import HistoricMovement from "../articles/HistoricMovement"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "historic-peasants-movement" }}>
    <Seo title="Historic Movement" />
    <HistoricMovement />
  </Layout>
)

export default SecondPage
