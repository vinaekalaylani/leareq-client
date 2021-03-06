import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

import searchApi from "../../services/api";
import { success, error } from "../swal";

export default function ModalCreate({ managers, setShow, show, getEmployees }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [reportingManager, setReportingManager] = useState("");
  const [aditionalManager, setAditionalManager] = useState("");
  const [leaveAvailable, setLeaveAvailable] = useState("");
  const [level, setLevel] = useState("");

  const handleClose = () => {
    setFullName("")
    setEmail("")
    setPassword("")
    setPosition("")
    setReportingManager("")
    setAditionalManager("")
    setLeaveAvailable("")
    setLevel("")
    setShow(false);
  };

  const handleCreate = async (e) => {
    try {
      e.preventDefault();
      const data = {
        fullName,
        email,
        password,
        position,
        reportingManager,
        aditionalManager,
        leaveAvailable,
        level,
      };

      await searchApi.CreateUser(data);
      success();
      handleClose();

      getEmployees({ fullName: "", deleted: false })
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Employee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleCreate}>
          <Form.Control
            className="mb-3"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <Form.Select
            className="mb-3"
            value={reportingManager}
            onChange={(e) => setReportingManager(e.target.value)}
          >
            <option value="">Select Reporting Manager</option>
            {managers.map((el) => (
              <option key={el.id + "RM"} value={el.fullName}>
                {el.fullName}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className="mb-3"
            value={aditionalManager}
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
            className="mb-3"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option>Select Level</option>
            <option value="0">Staff</option>
            <option value="1">Superior</option>
          </Form.Select>
          <Button
            type="submit"
            className="btn-add d-flex justify-content-center align-items-center"
            style={{ color: "#fff", backgroundColor: "#05499C" }}
          >
            SAVE
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
