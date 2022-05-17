import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import ReportComp from '../components/reporting';
import SideBar from '../components/sidebar'
import searchApi from '../services/api';

export default function Report() {
  const [leaves, setLeaves] = useState([])
  
  const getLeaves = async (params) => {
    try {
      const res = await searchApi.getListLeaves(params)
      setLeaves(res)
    } catch (error) {
      console.log(error)      
    }
  }

  useEffect(() => {
    getLeaves()
  }, [])

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <ReportComp leaves={leaves} setLeaves={setLeaves}/>
        </Col>
      </Row>
    </Container>
  )
}
