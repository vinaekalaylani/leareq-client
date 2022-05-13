import PageComp from '../components/page'
import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import searchApi from '../services/api';

export default function Home() {
  const [leaves, setLeaves] = useState([])
  const [user, setUser] = useState({})
  const [initial, setInitial] = useState("")

  const getInitial = async () => {
    try {
      const res = await searchApi.getInitial()
      setInitial(res)
    } catch (error) {
      console.log(error)
    }
  }

  const getUserLogin = async () => {
    try {
      const res = await searchApi.getUserLogin()
      setUser(res)
    } catch (error) {
      console.log(error)
    }
  }

  const getLeaves = async () => {
    try {
      const res = await searchApi.LeaveUserLogin()
      setLeaves(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserLogin()
    getInitial()
    getLeaves()
  }, [])

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <PageComp user={user} leaves={leaves} initial_user={initial} setLeaves={setLeaves} />
        </Col>
      </Row>
    </Container>
  )
}
