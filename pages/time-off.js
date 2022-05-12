import TimeOffComp from '../components/listTimeOff';
import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

export default function TimeOff(props) {
  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar initial_user={props.data_initial}/>
        </Col>
        <Col xs={9}>
          <TimeOffComp data={props.data} data_id={props.data_id}/>
        </Col>
      </Row>
    </Container>
  )
}

export async function getServerSideProps({ query }) {
  const res = await axios.get(`http://localhost:3600/list`, {
    headers: {
      access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWUiOiJCdW5nYSBNYXdhciBNZWxhdGkiLCJlbWFpbCI6ImJ1bmdhQG1haWwuY29tIiwibGV2ZWwiOjEsImlhdCI6MTY1MjI2MzUwOX0.oz10kCDjSVeNlTLHwcVN6SBcuH1UQpgQefz6PyWHKhQ`
    }
  })

  let filter_id 
  if (query.id) filter_id = query.id
  else filter_id = res.data[0].id
  const res_id = await axios.get(`http://localhost:3600/list?id=${filter_id}`, {
    headers: {
      access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWUiOiJCdW5nYSBNYXdhciBNZWxhdGkiLCJlbWFpbCI6ImJ1bmdhQG1haWwuY29tIiwibGV2ZWwiOjEsImlhdCI6MTY1MjI2MzUwOX0.oz10kCDjSVeNlTLHwcVN6SBcuH1UQpgQefz6PyWHKhQ`
    }
  })

  const res_initial = await axios.get(`http://localhost:3600/initial`, {
    headers: {
      access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWUiOiJCdW5nYSBNYXdhciBNZWxhdGkiLCJlbWFpbCI6ImJ1bmdhQG1haWwuY29tIiwibGV2ZWwiOjEsImlhdCI6MTY1MjI2MzUwOX0.oz10kCDjSVeNlTLHwcVN6SBcuH1UQpgQefz6PyWHKhQ`
    }
  })
  
  const data = await res.data
  const data_id = await res_id.data[0]
  const data_initial = await res_initial.data

  return {
    props: {
      data,
      data_id,
      data_initial
    }
  }
}
