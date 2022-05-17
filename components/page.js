import Link from 'next/link'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Row, Col, Modal, Form, Button } from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import searchApi from '../services/api';
import { success, error } from './swal';

export default function PageComp({ user, initial, leaves, setLeaves }) {
  const [date, setDate] = useState("")
  const [month, setMonth] = useState("")
  const [show, setShow] = useState(false)

  const [reason, setReason] = useState("")
  const router = useRouter()

  const handleShow = () => {
    setShow(true)
  }

  const handleClose = () => {
    setReason("")
    setShow(false)
  }

  const getDate = () => {
    try {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);

      const date_now = today.getDate();
      const month_now = today.toLocaleString('default', { month: 'long' });

      setDate(date_now)
      setMonth(month_now)
    } catch (err) {
      error(err);
    }
  };

  const handleApply = async (e) => {
    try {
      e.preventDefault();
      await searchApi.QuickApply(reason)
      const update = await searchApi.getUserLogin()
      success()
      setReason("")
      setLeaves(update?.Leaves)
      router.push("/")
      handleClose()
    } catch (err) {
      console.log(err)
    }
  }

  const handleReason = (e) => {
    setReason(e.target.value)
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("level")
    router.push("/login")
  }

  useEffect(() => {
    getDate()
  }, [])

  return (
    <div>
      <div className="page-text">
        <h1>Hello, {user.fullName}</h1>
      </div>
      <Row>
        <Col xs={5} className="calendar-container d-flex justify-content-center align-items-center">
          <Calendar locale="en-GB" />
        </Col>
        <Col xs={6}>
          <Row className="profile-container d-flex align-items-center">
            <Col xs={4} className="profile d-flex justify-content-center align-items-center rounded-circle">
              <div className="title-profile">{initial}</div>
            </Col>
            <Col xs={6}>
              <div className="text-profile">{user.fullName}</div>
              <div className="text-profile">{user.position}</div>
              <div className="text-profile">{user.employeeCode}</div>
              <div className="text-profile">{user.email}</div>
              <div className="text-profile">{user.reportingManager}</div>
              <div onClick={logout} className="btn-logout d-flex justify-content-center align-items-center">
                Logout
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <div className="page-text" style={{ margin: "-9px 0 9px 0" }}>
            <h4>Time Off Request</h4>
          </div>
          <div className="list-container">
            {
              leaves.map(el => (
                <Row key={el.id} className="list-row d-flex align-items-center d-flex align-items-center">
                  <Col xs={3} className="list-col">{new Date(el?.dateFrom).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' })}</Col>
                  <Col xs={1} className="list-col" style={{ marginRight: "35px" }}>{el.type}</Col>
                  <Col xs={2} className="list-col">{el.status}</Col>
                  <Col xs={4} className="list-col">{new Date(el?.createdAt).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' })} {new Date(el?.createdAt).toLocaleTimeString('en-US')}</Col>
                </Row>
              ))
            }
          </div>
        </Col>
        <Col xs={3} className="request-card" style={{ margin: "0px" }}>
          <div className="req-text" style={{ fontWeight: "bold" }}>Time Off (Quick Apply)</div>
          <div className="req-text">I want to take Leave Time Off for today ({date} {month})</div>
          <div className="btn-quick">
            <div onClick={handleShow}>APPLY</div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Time Off (Quick Apply)</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleApply}>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows="3" placeholder="Reason" value={reason} onChange={handleReason} />
                </Form.Group>
                <Button type="submit" className="btn-add d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#05499C" }}>APPLY</Button>
              </Form>
            </Modal.Body>
          </Modal>
          <Link href="/apply-timeoff"><div className="req-text" style={{ textDecoration: "underline" }}>Apply for Another Date</div></Link>
          <hr />
          <div className="text-to">Time Off</div>
          <div className="text-to mb-2">Leave&emsp;: {user.leaveAvailable} Days Available</div>
        </Col>
      </Row>
    </div>
  )
}
