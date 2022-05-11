import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link'

export default function PageComp({ data }) {
  return (
    <div>
      <div className="page-text">
        <h1>Hello, {data.fullName}</h1>
      </div>
      <Row>
        <Col xs={5} className="calendar-container d-flex justify-content-center">
          <Calendar />
        </Col>
        <Col xs={6}>
          <Row className="profile-container d-flex align-items-center">
            <Col xs={3} className="profile d-flex justify-content-center align-items-center rounded-circle">
              <div className="title-profile">BM</div>
            </Col>
            <Col xs={6}>
              <div className="text-profile">{data.fullName}</div>
              <div className="text-profile">{data.position}</div>
              <div className="text-profile">{data.employeeCode}</div>
              <div className="text-profile">{data.email}</div>
              <div className="text-profile">{data.reportingManager}</div>
              <div className="btn-logout d-flex justify-content-center align-items-center">
                <Link href="/"><div>Logout</div></Link>
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
          {
            data.Leaves.map(el => (
              <Row key={el.id} className="list-row d-flex align-items-center d-flex align-items-center">
                <Col xs={3} className="list-col">{el.dateFrom}</Col>
                <Col xs={1} className="list-col" style={{ marginRight: "20px" }}>{el.type}</Col>
                <Col xs={2} className="list-col">{el.status}</Col>
                <Col xs={4} className="list-col">{el.createdAt}</Col>
              </Row>
            ))
          }
        </Col>
        <Col xs={3} className="request-card" style={{ margin: "0px" }}>
          <div className="req-text">Time Off (Quick Apply)</div>
          <div className="req-text">I want to take Leave Time Off for today (10 May)</div>
          <div className="btn-quick">
            <Link href="/apply-timeoff"><div>APPLY</div></Link>
          </div>
          <div className="req-text">Apply for Another Date</div>
          <hr />
          <div className="text-to">Time Off</div>
          <div className="text-to">Leave&emsp;: 12 days / 10 available</div>
        </Col>
      </Row>
    </div>
  )
}
