import ListTimeOff from '../components/time-off/list';
import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import searchApi from '../services/api';
import { useRouter } from 'next/router';

export default function TimeOff() {
  const router = useRouter()
  const [leaves, setLeaves] = useState([])
  const [leave, setLeave] = useState({})
  const [level, setLevel] = useState(0)

  const getLevel = () => {
    const res = localStorage.getItem("level")
    setLevel(res)
  }

  const getLeaves = async () => {
    try {
      const user = await searchApi.getUserLogin()
      const data_leaves = await searchApi.getListLeaves()
      const res = data_leaves.filter(el => el.User.reportingManager == user.fullName || el.User.aditionalManager == user.fullName)
      setLeaves(res)
    } catch (error) {
      console.log(error)
    }
  }

  const getLeave = async (id) => {
    try {
      const res = await searchApi.getLeaveById({ id })
      setLeave(res)
    } catch (error) {
      console.log(error)
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
          <ListTimeOff leaves={leaves} leave={leave} level={level} setLeave={setLeave} setLeaves={setLeaves} />
        </Col>
      </Row>
    </Container>
  )
}