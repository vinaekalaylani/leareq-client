import TimeOffComp from '../components/listTimeOff';
import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';

export default function TimeOff() {

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <TimeOffComp/>
        </Col>
      </Row>
    </Container>
  )
}
