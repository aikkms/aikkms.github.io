import React from "react"
import { navigate } from "gatsby"
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap"
import Carousel from "../components/carousel"

import Layout from "../components/layout"
import Seo from "../components/seo"

import conference from '../news/Third-All-India-Conference/images/2.gif'
import protest from '../articles/ConsolidatePeasantMovement/images/1.gif'

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <Seo title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
      <Row>
        <Col md={{ span: 8 }}>
          <Card>
            <Card.Header><b>3rd All India Conference</b></Card.Header>
            <Card.Body>
              <Card.Title>Make 3rd All India conference of AIKKMS, a grand success to strengthen the peasant movement in India</Card.Title>
              <Card.Text>Our organisation, AIKKMS, is a weapon in the hands of the toiling peasants of India to fight against the onslaught of Capital of home and abroad. Long back in 1950, comrade Shibdas Ghosh,one of the foremost Marxist thinkers of the era, founded our organisation, AIKKMS. From then on, guided by his teachings, we have organised hundreds of movements to safeguard the interests of the toiling millions of our country.</Card.Text>
              <Button variant="primary" onClick={() => navigate("/third-all-india-conference")}>Read</Button>
              <Image width="100%" height={"auto"} style={{ display: "block" }} src={conference}></Image>
            </Card.Body>
          </Card>
          <br />
          <Carousel />
          <br />
        </Col>
        <Col md={{ span: 4 }}>
          <Card>
            <Card.Header>Article</Card.Header>
            <Card.Body>
              <Card.Title>Resist all attacks of imperialism-Capitalism</Card.Title>
              <Image width="100%" height={"auto"} style={{ display: "block" }} src={protest}></Image>
              <br />
              <Button variant="primary" onClick={() => navigate("/resist-all-attacks-of-imperialism-capitalism")}>Read</Button>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>The proposal of AIKKMS in the SKM meeting on January 21,2021</Card.Title>

              <Button variant="primary" onClick={() => navigate("/proposal-of-aikkms-skm-meeting")}>Read</Button>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Memorandum to Prime Minister</Card.Title>

              <Button variant="primary" onClick={() => navigate("/memorandum")}>Read</Button>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>News</Card.Header>
            <Card.Body>
              <Card.Title>National Convention on {'"'}Ongoing Peasants{"'"} movement{'"'}</Card.Title>
              <Card.Text>This online  National convention, at the call of All India Kisan Khet Mazdoor Sangathan, AIKKMS, expresses its wholehearted revolutionary greetings to the struggling farmers across the country...</Card.Text>

              <Button variant="primary" onClick={() => navigate("/online-convention")}>Read</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  </Layout >
)

export default IndexPage
