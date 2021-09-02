import React from "react" 
import { navigate } from "gatsby"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Carousel from "../components/carousel"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
      <Row>
        <Col md={{ span: 8 }}>
          <Carousel />
          <br />
        </Col>
        <Col md={{ span: 4 }}>        
          <Card>
            <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Memorandum to Prime Minister</Card.Title>
                
                <Button variant="primary" onClick={() => navigate("/memorandum")}>Read</Button>
              </Card.Body>
            </Card>
            <br/>
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
  </Layout>
)

export default IndexPage
