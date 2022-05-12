import axios from 'axios';
import { useState } from 'react';
import { Row, Col, Modal, Form, Button } from 'react-bootstrap';

export default function EmployeeComp(props) {
  const [show, setShow] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [position, setPosition] = useState("")
  const [employeeCode, setEmployeeCode] = useState("")
  const [reportingManager, setReportingManager] = useState("")

  const handleShow = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  const handleName = (e) => {
    setFullName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePass = (e) => {
    setPassword(e.target.value)
  }

  const handlePosition = (e) => {
    setPosition(e.target.value)
  }

  const handleEmpCode = (e) => {
    setEmployeeCode(e.target.value)
  }

  const handleManager = (e) => {
    setReportingManager(e.target.value)
  }

  const handleCreate = async (e) => {
    try {
      e.preventDefault();
      const data = {
        fullName,
        email,
        password,
        position,
        employeeCode,
        reportingManager,
        level: "0",
      }

      const res = await axios.post('http://localhost:3600/create-user',
        data,
        {
          headers: {
            access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWUiOiJCdW5nYSBNYXdhciBNZWxhdGkiLCJlbWFpbCI6ImJ1bmdhQG1haWwuY29tIiwibGV2ZWwiOjEsImlhdCI6MTY1MjI2MzUwOX0.oz10kCDjSVeNlTLHwcVN6SBcuH1UQpgQefz6PyWHKhQ`
          }
        })

      handleClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="page-text">
        <h1>Employee</h1>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleCreate}>
            <Form.Control className="mb-3" placeholder="Full Name" value={fullName} onChange={handleName} />
            <Form.Control className="mb-3" type="email" placeholder="Email" value={email} onChange={handleEmail} />
            <Form.Control className="mb-3" type="password" placeholder="Password" value={password} onChange={handlePass} />
            <Form.Control className="mb-3" placeholder="Position" value={position} onChange={handlePosition} />
            <Form.Control className="mb-3" placeholder="Employee Code" value={employeeCode} onChange={handleEmpCode} />
            <Form.Control className="mb-3" placeholder="Reporting Manager" value={reportingManager} onChange={handleManager} />
            <Button type="submit" className="btn-add d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#05499C" }}>SAVE</Button>
          </Form>
        </Modal.Body>
      </Modal>
      <div className="btn-add d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#FFD460" }} onClick={handleShow}>New Employee</div>
      <Row>
        {
          props.data.map(el => (
            <Col xs={2} key={el.id} className="emp-row d-flex justify-content-center align-items-center">
              <div>
                <div className="rounded-circle employee d-flex justify-content-center align-items-center">
                  <h3>BM</h3>
                </div>
                <div className="emp-text">{el.fullName}</div>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
