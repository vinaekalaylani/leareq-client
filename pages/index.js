import PageComp from '../components/page'
import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios'

export default function Home(props) {
  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar initial_user={props.data_initial}/>
        </Col>
        <Col xs={9}>
          <PageComp data={props.data} initial_user={props.data_initial}/>
        </Col>
      </Row>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:3600/list-user-id`, {
    headers: {
      access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWUiOiJCdW5nYSBNYXdhciBNZWxhdGkiLCJlbWFpbCI6ImJ1bmdhQG1haWwuY29tIiwibGV2ZWwiOjEsImlhdCI6MTY1MjI2MzUwOX0.oz10kCDjSVeNlTLHwcVN6SBcuH1UQpgQefz6PyWHKhQ`
    }
  })

  const res_initial = await axios.get(`http://localhost:3600/initial`, {
    headers: {
      access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWUiOiJCdW5nYSBNYXdhciBNZWxhdGkiLCJlbWFpbCI6ImJ1bmdhQG1haWwuY29tIiwibGV2ZWwiOjEsImlhdCI6MTY1MjI2MzUwOX0.oz10kCDjSVeNlTLHwcVN6SBcuH1UQpgQefz6PyWHKhQ`
    }
  })

  const data = await res.data[0]
  const data_initial = await res_initial.data
  return {
    props: {
      data,
      data_initial
    }
  }
}
