import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import ReqTimeOff from '../components/reqTimeOff';

export default function ApplyTimeOff() {

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <ReqTimeOff />
        </Col>
      </Row>
    </Container>
  )
}
