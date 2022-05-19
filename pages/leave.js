import ListLeave from '../components/leave/list';
import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import searchApi from '../services/api';
import { error } from '../components/swal';

export default function TimeOff() {
  const [leaves, setLeaves] = useState([])
  const [leave, setLeave] = useState({})
  const [level, setLevel] = useState(0)

  const getLevel = () => {
    const res = localStorage.getItem("level")
    setLevel(res)
  }

  const getLeaves = async () => {
    try {
      const res = await searchApi.getListLeaves()
      setLeaves(res.data)
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  }

  const getLeave = async (id) => {
    try {
      const res = await searchApi.getLeaveById({ id })
      setLeave(res.data)
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  }
  useEffect(() => {
    getLeaves()
    getLeave()
    getLevel()
  }, [])

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <ListLeave leaves={leaves} leave={leave} level={level} setLeave={setLeave} setLeaves={setLeaves} />
        </Col>
      </Row>
    </Container>
  )
}