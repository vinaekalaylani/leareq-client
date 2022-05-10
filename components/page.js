import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Row, Col } from 'react-bootstrap';

export default function PageComp() {
  return (
    <div className="col-md-9 page">
      <div className="page-text">
        <h1>Hello, Bunga Mawar Melati</h1>
      </div>
      <Row className="page-container">
        <Col xs={5} className="calendar-container">
          <Calendar />
        </Col>
        <Col xs={7}>
          <Row className="profile-container">
            <Col xs={4} className="profile">
              <div className="title-profile">BM</div>
            </Col>
            <Col xs={8}>
              <h4 className="text-profile">Bunga Mawar Melati</h4>
              <h4 className="text-profile">Full Stack Developer</h4>
              <h4 className="text-profile">EMP129012</h4>
              <h4 className="text-profile">bungamawar@mail.com</h4>
              <h4 className="text-profile">Semuanya Indah</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="page-container">
        <Col xs={5}>
          <div className="page-text">
            <h3>Time Off Request</h3>
          </div>
          <Row className="list-row">
            <Col xs={3} className="list-col">19 May 2022</Col>
            <Col xs={3} className="list-col">Leave</Col>
            <Col xs={6} className="list-col">08 Maret 2022, 08:32 AM</Col>
          </Row>
          <Row className="list-row">
            <Col xs={3} className="list-col">19 May 2022</Col>
            <Col xs={3} className="list-col">Leave</Col>
            <Col xs={6} className="list-col">08 Maret 2022, 08:32 AM</Col>
          </Row>
          <Row className="list-row">
            <Col xs={3} className="list-col">19 May 2022</Col>
            <Col xs={3} className="list-col">Leave</Col>
            <Col xs={6} className="list-col">08 Maret 2022, 08:32 AM</Col>
          </Row>
          <Row className="list-row">
            <Col xs={3} className="list-col">19 May 2022</Col>
            <Col xs={3} className="list-col">Leave</Col>
            <Col xs={6} className="list-col">08 Maret 2022, 08:32 AM</Col>
          </Row>
          <Row className="list-row">
            <Col xs={3} className="list-col">19 May 2022</Col>
            <Col xs={3} className="list-col">Leave</Col>
            <Col xs={6} className="list-col">08 Maret 2022, 08:32 AM</Col>
          </Row>
          <Row className="list-row">
            <Col xs={3} className="list-col">19 May 2022</Col>
            <Col xs={3} className="list-col">Leave</Col>
            <Col xs={6} className="list-col">08 Maret 2022, 08:32 AM</Col>
          </Row>
        </Col>
        <Col xs={7} className="request-card">
          <div className="req-text">Time Off (Quick Apply)</div>
          <div className="req-text">I want to take Leave Time Off for today (10 May)</div>
          <div className="btn-quick">APPLY</div>
          <div className="req-text">Apply for Another Date</div>
          <hr/>
          <div className="text-to">&emsp;Time Off</div>
          <div className="text-to">&emsp;Leave&emsp;: 12 days / 10 available</div>
        </Col>
      </Row>
    </div>
  )
}
