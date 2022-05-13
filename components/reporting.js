import React from "react";
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import searchApi from '../services/api';
import ReactToPrint from "react-to-print";

export default function ReportComp(props) {
  const [type, setType] = useState("")
  const [status, setStatus] = useState("")

  const handleClear = async () => {
    setType("")
    setStatus("")
    const leaves = await searchApi.getListLeaves()
    props.setLeaves(leaves)
  }

  const handleFilter = async (e) => {
    try {
      e.preventDefault()
      const leaves = await searchApi.getListLeaves({ type, status })
      props.setLeaves(leaves)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="page-text">
        <h1>Report Time Off</h1>
      </div>
      <Row>
        <Col xs={9} >
          <div className="report-container" ref={el => (React.componentRef = el)}>
            {
              props.leaves.map(el => (
                <Row className="list-row d-flex align-items-center" key={el.id}>
                  <Col xs={1} className="list-col" style={{ marginRight: "30px" }}>{el.User.employeeCode}</Col>
                  <Col xs={4} className="list-col" style={{ marginRight: "-50px" }}>{el.User.fullName}</Col>
                  <Col xs={1} className="list-col" style={{ marginRight: "10px" }}>{el.type}</Col>
                  <Col xs={2} className="list-col" style={{ marginRight: "-50px" }}>{el.status}</Col>
                  <Col xs={3} className="list-col text-end">{el.dateFrom}</Col>
                </Row>
              ))
            }
          </div>
          <div className="d-flex justify-content-end" style={{ marginTop: "20px", marginRight: "40px" }}>
            <ReactToPrint
              trigger={() => <div className="btn d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#FFD460" }}>Print</div>}
              content={() => React.componentRef}
            />
          </div>
        </Col>
        <Col xs={3}>
          <div className="filter-card" style={{ padding: "30px 20px 30px 20px" }}>
            <Form onSubmit={handleFilter}>
              <Form.Label>Type</Form.Label>
              <Form.Select className="mb-3" value={type} onChange={(e) => setType(e.target.value)}>
                <option>Open this select menu</option>
                <option value="Leave">Leave</option>
                <option value="Optional">Optional</option>
              </Form.Select>
              <Form.Label>Status</Form.Label>
              <Form.Select className="mb-3" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option>Open this select menu</option>
                <option value="Process">Process</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </Form.Select>
              <Row>
                <Col xs={4}>
                  <div onClick={handleClear} className="btn-add d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#EF4B4B" }}>Clear
                  </div>
                </Col>
                <Col xs={4} style={{ marginLeft: "10px" }}>
                  <Button type="submit" className="btn-add d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#05499C" }}>Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}
