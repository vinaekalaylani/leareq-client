import PageComp from '../components/page'
import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';

export default function Dashboard() {

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <PageComp />
        </Col>
      </Row>
    </Container>
  )
}
