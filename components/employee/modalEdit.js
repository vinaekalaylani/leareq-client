import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

import searchApi from "../../services/api";
import { success, error } from "../swal";

export default function ModalEdit({ show, managers, employee, handleClose, getEmployees }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [reportingManager, setReportingManager] = useState("");
  const [aditionalManager, setAditionalManager] = useState("");
  const [leaveAvailable, setLeaveAvailable] = useState("");
  const [level, setLevel] = useState("");

  const handleUpdate = async (e) => {
    try {
      e.preventDefault()

      const data = {
        // fullName,
        // email,
        // position,
        // reportingManager,
        // aditionalManager,
        leaveAvailable,
        // level,
      };

      await searchApi.updateUser(data, employee.id);
      getEmployees({ fullName: "", deleted: false })
      success()
      handleClose()
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Employee</Modal.Title>
        <br />
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleUpdate}>
          <Form.Control
            className="mb-3"
            placeholder="Full Name"
            value={employee.fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Email"
            value={employee.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            placeholder="Position"
            value={employee.position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <Form.Select
            className="mb-3"
            value={employee.reportingManager}
            onChange={(e) => setReportingManager(e.target.value)}
          >
            <option value="">Select Reporting Manager</option>
            {managers.map((el) => (
              <option key={el.id + "BM"} value={el.fullName}>
                {el.fullName}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className="mb-3"
            value={employee.aditionalManager}
            onChange={(e) => setAditionalManager(e.target.value)}
          >
            <option value="">Select Aditional Manager</option>
            {managers.map((el) => (
              <option key={el.id + "AM"} value={el.fullName}>
                {el.fullName}
              </option>
            ))}
          </Form.Select>
          <Form.Control
            className="mb-3"
            placeholder="Leave"
            value={leaveAvailable}
            onChange={(e) => setLeaveAvailable(e.target.value)}
          />
          <Form.Select
            type="number"
            className="mb-3"
            value={employee.level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option>Select Level</option>
            <option value="0">Staff</option>
            <option value="1">Superior</option>
          </Form.Select>
          <Button type="submit" className="btn-add d-flex justify-content-center align-items-center"
            style={{ color: "#fff", backgroundColor: "#05499C" }}> SAVE
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
