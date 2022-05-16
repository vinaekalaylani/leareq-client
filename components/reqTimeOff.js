import { Form, Button, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

import searchApi from "../services/api";
import { success, error } from "./swal";

export default function ReqTimeOff({ user, initial }) {
  const [type, setType] = useState("");
  const [dayType, setDayType] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [reason, setReason] = useState("");
  const router = useRouter();

  const handleType = (value) => {
    setType(value);
  };

  const handleDayType = (value) => {
    setDayType(value);
  };

  const handleApply = async (e) => {
    try {
      e.preventDefault();
      const data = {
        type,
        dayType,
        dateFrom,
        dateTo,
        reason,
      };

      await searchApi.ApplyLeave(data);
      success();
      router.push("/");
    } catch (err) {
      error(err);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div className="detail-user d-flex justify-content-center align-items-center">
        <div className="user-profile rounded-circle d-flex justify-content-center align-items-center">
          {initial}
        </div>
        <div className="user-profile-text d-flex justify-content-center align-items-center">
          {user.fullName} (Me)
        </div>
      </div>
      <div className="req-container">
        <Form onSubmit={handleApply}>
          <Row>
            <Col>
              <label className="label-form">Type :</label>
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Leave"
                    value="Leave"
                    className="mb-3"
                    onChange={() => handleType("Leave")}
                    checked={type === "Leave" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Optional"
                    value="Optional"
                    className="mb-3"
                    onChange={() => handleType("Optional")}
                    checked={type === "Optional" ? true : false}
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <label className="label-form">Day Type :</label>
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Full"
                    className="mb-3"
                    value="Full"
                    onChange={() => handleDayType("Full")}
                    checked={dayType === "Full" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    disabled={type === "Optional" ? true : false}
                    type="checkbox"
                    label="First Half"
                    className="mb-3"
                    value="First Half"
                    onChange={() => handleDayType("First Half")}
                    checked={dayType === "First Half" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    disabled={type === "Optional" ? true : false}
                    type="checkbox"
                    label="Second Half"
                    className="mb-3"
                    value="Second Half"
                    onChange={() => handleDayType("Second Half")}
                    checked={dayType === "Second Half" ? true : false}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <label className="label-form">From :</label>
              <Form.Control
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </Col>
            <Col>
              <label className="label-form">To :</label>
              <Form.Control
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </Col>
          </Row>
          <label className="label-form">Reason :</label>
          <Form.Control
            type="date"
            as="textarea"
            rows="3"
            className="mb-3"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <label className="label-form" style={{ fontSize: "23px" }}>
            Reporting Information
          </label>
          <br />
          <label className="label-form">Reporting Manager :</label>
          <div className="detail-user d-flex align-items-center">
            <div
              className="user-profile rounded-circle d-flex justify-content-center align-items-center"
              style={{ marginLeft: "10px" }}
            >
              RM
            </div>
            <div className="user-profile-text d-flex justify-content-center align-items-center">
              {user.reportingManager} (Me)
            </div>
          </div>
          <label className="label-form">Additional Manager :</label>
          <div className="detail-user d-flex align-items-center">
            <div
              className="user-profile rounded-circle d-flex justify-content-center align-items-center"
              style={{ marginLeft: "10px" }}
            >
              AM
            </div>
            <div className="user-profile-text d-flex justify-content-center align-items-center">
              {user.aditionalManager} (Me)
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Button
              type="submit"
              className="btn-add d-flex justify-content-center align-items-center"
              style={{ color: "#fff", backgroundColor: "#05499C" }}
            >
              APPLY
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
