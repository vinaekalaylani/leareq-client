import { Form, Button, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

import searchApi from "../services/api";
import { success, error } from "./swal";

export default function ReqTimeOff({ user, initial }) {
  const [other, setOther] = useState("")
  const [type, setType] = useState("");
  const [dayType, setDayType] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [totalDays, setTotalDays] = useState("");
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
      let temp_type = type
      if (type == "Other") temp_type = other
      const data = {
        type: temp_type,
        dayType,
        dateFrom,
        dateTo,
        totalDays,
        reason,
      };
      await searchApi.ApplyLeave(data);
      success();
      router.push("/");
    } catch (err) {
      const { message } = err.response.data
      error(message)
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
          <Row>
            <Col xs={8}>
              <label className="label-form">Type :</label>
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Vacation"
                    value="Vacation"
                    className="mb-3"
                    onChange={() => handleType("Vacation")}
                    checked={type === "Vacation" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Time In Lieu (TIL)"
                    value="TIL"
                    className="mb-3"
                    onChange={() => handleType("TIL")}
                    checked={type === "TIL" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Sick/Medical"
                    value="Sick"
                    className="mb-3"
                    onChange={() => handleType("Sick")}
                    checked={type === "Sick" ? true : false}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Unpaid Leave"
                    value="Unpaid"
                    className="mb-3"
                    onChange={() => handleType("Unpaid")}
                    checked={type === "Unpaid" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Bereavement"
                    value="Bereavement"
                    className="mb-3"
                    onChange={() => handleType("Bereavement")}
                    checked={type === "Bereavement" ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Overtime"
                    value="Overtime"
                    className="mb-3"
                    onChange={() => handleType("Overtime")}
                    checked={type === "Overtime" ? true : false}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={3} style={{ marginRight: "-50px" }}>
                  <Form.Check
                    type="checkbox"
                    label="Other :"
                    className="mb-3"
                    onChange={() => handleType("Other")}
                    checked={type === "Other" ? true : false}
                  />
                </Col>
                <Col xs={4}>
                  <Form.Control
                    disabled={type === "Other" ? false : true}
                    className="mb-3"
                    value={other}
                    onChange={(e) => setOther(e.target.value)}
                  /></Col>
              </Row>
            </Col>
            <Col xs={4}>
              <label className="label-form">Total Days :</label>
              <Form.Control
                className="mb-2"
                type="number"
                value={totalDays}
                onChange={(e) => setTotalDays(e.target.value)}
              />
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
                    disabled={type === "Optional" || totalDays > 1 ? true : false}
                    type="checkbox"
                    label="Half"
                    className="mb-3"
                    value="Half"
                    onChange={() => handleDayType("Half")}
                    checked={dayType === "Half" ? true : false}
                  />
                </Col>
              </Row>
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
          <Row>
            <Col xs={4}>
              <label className="label-form">Reporting Manager :</label>
              <div className="detail-user d-flex align-items-center">
                <div
                  className="user-profile rounded-circle d-flex justify-content-center align-items-center"
                  style={{ marginLeft: "10px" }}
                >
                  RM
                </div>
                <div className="user-profile-text d-flex justify-content-center align-items-center">
                  {user.reportingManager}
                </div>
              </div>
            </Col>
            {user.aditionalManager && (
              <Col xs={4} className="ms-4">
                <label className="label-form">Additional Manager :</label>
                <div className="detail-user d-flex align-items-center">
                  <div
                    className="user-profile rounded-circle d-flex justify-content-center align-items-center"
                    style={{ marginLeft: "10px" }}
                  >
                    AM
                  </div>
                  <div className="user-profile-text d-flex justify-content-center align-items-center">
                    {user.aditionalManager}
                  </div>
                </div>
              </Col>
            )}
          </Row>
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
