import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from "react"

import { error } from '../components/swal';
import ReqLeave from '../components/req-leave';
import SideBar from '../components/sidebar'
import searchApi from "../services/api"

export default function ApplyLeave() {
  const [user, setUser] = useState({})
  const [initial, setInitial] = useState("")

  const getUser = async () => {
    try {
      const res = await searchApi.getUserLogin()
      setUser(res.data)
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  }

  const getInitial = async () => {
    try {
      const res = await searchApi.getInitial()
      setInitial(res.data)
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  }

  useEffect(() => {
    getUser()
    getInitial()
  }, [])

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar/>
        </Col>
        <Col xs={9}>
          <ReqLeave user={user} initial={initial}/>
        </Col>
      </Row>
    </Container>
  )
}
