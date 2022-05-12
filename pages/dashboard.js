import PageComp from '../components/page'
import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios'

export default function Dashboard(props) {
  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <PageComp data={props.dataUser}/>
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
  console.log(res)
  const dataUser = await res.data[0]
  return {
    props: {
      dataUser
    }
  }
}
