import SideBar from '../components/sidebar'
import { Row, Col, Container } from 'react-bootstrap';
import EmployeeComp from '../components/employee';
import { useEffect, useState } from 'react';
import searchApi from '../services/api';

export default function Employee() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const res = await searchApi.getListUser()
      setUsers(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar/>
        </Col>
        <Col xs={9}>
          <EmployeeComp users={users} setUsers={setUsers}/>
        </Col>
      </Row>
    </Container>
  )
}
