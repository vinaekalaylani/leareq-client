import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import ReportComp from '../components/reporting/reporting';
import SideBar from '../components/sidebar'
import searchApi from '../services/api';
import { error } from '../components/swal';

export default function Report() {
  const [history, setHistory] = useState([])
  const [years, setYears] = useState([])

  const getHistory = async (params) => {
    try {
      const { data } = await searchApi.getHistory(params)
      setHistory(data)
    } catch (err) {
      error(err)
    }
  }

  const getYear = () => {
    const max = new Date().getFullYear()
    const min = max - 9
    const arrYear = []

    for (const i = max; i >= min; i--) {
      arrYear.push(i)
    }
    setYears(arrYear)
  }

  useEffect(() => {
    getHistory({ type: "", status: "", deleted: false, year: "" })
    getYear()
  }, [])

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <ReportComp history={history} getHistory={getHistory} years={years}/>
        </Col>
      </Row>
    </Container>
  )
}
