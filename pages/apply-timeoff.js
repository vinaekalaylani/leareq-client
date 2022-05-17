import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from "react"

import ReqTimeOff from '../components/reqTimeOff';
import SideBar from '../components/sidebar'
import searchApi from "../services/api"

export default function ApplyTimeOff() {
  const [user, setUser] = useState({})
  const [initial, setInitial] = useState("")

  const getUser = async () => {
    try {
      const res = await searchApi.getUserLogin()
      setUser(res)
    } catch (error) {
      console.log(error)
    }
  }

  const getInitial = async () => {
    try {
      const res = await searchApi.getInitial()
      setInitial(res)
    } catch (error) {
      console.log(error)
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
          <ReqTimeOff user={user} initial={initial}/>
        </Col>
      </Row>
    </Container>
  )
}
