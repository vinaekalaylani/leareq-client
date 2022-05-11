import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import EmployeeComp from '../components/employee';

export default function Employee() {

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <EmployeeComp/>
        </Col>
      </Row>
    </Container>
  )
}
