import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import ReqTimeOff from '../components/reqTimeOff';
import axios from 'axios';

export default function ApplyTimeOff(props) {
  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar initial_user={props.data_initial}/>
        </Col>
        <Col xs={9}>
          <ReqTimeOff initial_user={props.data_initial}/>
        </Col>
      </Row>
    </Container>
  )
}

export async function getServerSideProps() {
  const res_initial = await axios.get(`http://localhost:3600/initial`, {
    headers: {
      access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWUiOiJCdW5nYSBNYXdhciBNZWxhdGkiLCJlbWFpbCI6ImJ1bmdhQG1haWwuY29tIiwibGV2ZWwiOjEsImlhdCI6MTY1MjI2MzUwOX0.oz10kCDjSVeNlTLHwcVN6SBcuH1UQpgQefz6PyWHKhQ`
    }
  })

  const data_initial = await res_initial.data
  return {
    props: {
      data_initial
    }
  }
}
