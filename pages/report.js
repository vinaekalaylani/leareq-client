import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import ReportComp from '../components/reporting';

export default function Report() {

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <ReportComp/>
        </Col>
      </Row>
    </Container>
  )
}
