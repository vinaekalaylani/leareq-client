import TimeOffComp from '../components/listTimeOff';
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
      const res = await searchApi.getListLeaves()
      setLeaves(res)
    } catch (error) {
      console.log(error)
    }
  }

  const getLeave = async () => {
    try {
      let params = router.query
      const res = await searchApi.getLeaveById(params)
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
          <TimeOffComp leaves={leaves} leave={leave} level={level} setLeave={setLeave} setLeaves={setLeaves}/>
        </Col>
      </Row>
    </Container>
  )
}