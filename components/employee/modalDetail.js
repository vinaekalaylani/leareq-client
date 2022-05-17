import { useState } from "react";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";

import searchApi from "../../services/api";
import { success, error } from "../swal";

export default function ModalDetail({ show, handleClose, user, getUsers }) {
  const [leaveAvailable, setLeaveAvailable] = useState("");
  const [update, setUpdate] = useState(false);

  const handleUpdate = async (e) => {
    try {
      e.preventDefault()
      await searchApi.updateLeave(leaveAvailable, user.id);
      getUsers()
      success()
      close()
    } catch (err) {
      error(err);
    }
  };

  const handleDelete = async (e) => {
    try {
      e.preventDefault()
      await searchApi.deleteUser(user.id);
      getUsers()
      success()
      close()
    } catch (err) {
      error(err);
    }
  };

  const handleShowUpdate = () => {
    setUpdate(true);
  };

  const close = () => {
    setUpdate(false)
    handleClose()
  }

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Detail Employee</Modal.Title>
        <br />
      </Modal.Header>

      <Modal.Body>
        {!update && (
          <Button
            onClick={handleShowUpdate}
            className="btn-add d-flex justify-content-center align-items-center"
            style={{ color: "#fff", backgroundColor: "#05499C" }}
          >
            EDIT LEAVE
          </Button>
        )}
        <Form onSubmit={handleUpdate}>
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Full Name"
            value={user.fullName}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            type="email"
            placeholder="Email"
            value={user.email}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Position"
            value={user.position}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Employee Code"
            value={user.employeeCode}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Reporting Manager"
            value={user.reportingManager}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Aditional Manager"
            value={user.aditionalManager}
          />
          <Form.Control
            disabled={!update}
            className="mb-3"
            placeholder="Leave"
            value={!update ? user.leaveAvailable : leaveAvailable}
            onChange={(e) => setLeaveAvailable(e.target.value)}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Level"
            value={user.level == 1 ? "Superior" : "Staff"}
          />
          {update && (
            <Row className="d-flex justify-content-start">
              <Col xs={3}>
                <Button
                  type="submit"
                  className="btn-add d-flex justify-content-center align-items-center"
                  style={{ color: "#fff", backgroundColor: "#05499C" }}
                >
                  SAVE
                </Button>
              </Col>
              <Col xs={3} style={{ marginLeft: "20px" }}>
                <div onClick={handleDelete}
                  className="btn-add d-flex justify-content-center align-items-center"
                  style={{ color: "#fff", backgroundColor: "#EF4B4B" }}
                >
                  DELETE
                </div>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
}
