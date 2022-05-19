import { Row, Col } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Table from './table';

export default function PageComp({ user, initial, leaves }) {
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
            <Col xs={3} className="profile d-flex justify-content-center align-items-center rounded-circle">
              <div className="title-profile">{initial}</div>
            </Col>
            <Col xs={8}>
              <div className="detail-text">
                Full Name : {user.fullName}
              </div>
              <div className="detail-text">
                Position : {user.position}
              </div>
              <div className="detail-text">
                Email : {user.email}
              </div>
              <div className="detail-text">
                Reporting Manager : {user.reportingManager}
              </div>
              <div className="detail-text">
                Aditional Manager : {user.aditionalManager}
              </div>
              <div className="detail-text">
                Leave : {user.leaveAvailable} Available
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <div className="page-text" style={{ margin: "-9px 0 9px 0" }}>
          <h4>Leave Request</h4>
        </div>
        <Table leaves={leaves} />
      </Row>
    </div>
  )
}
