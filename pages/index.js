import PageComp from '../components/page'
import TimeOff from '../components/listTimeOff';
import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import Report from '../components/reporting';
import Employee from '../components/employee';

export default function Home() {

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          {/* <PageComp /> */}
          {/* <TimeOff/> */}
          {/* <Report/> */}
          <Employee/>
        </Col>
      </Row>
    </Container>
  )
}
