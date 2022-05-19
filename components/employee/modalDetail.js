import { Modal, Form } from "react-bootstrap";
export default function ModalDetail({ show, handleClose, employee }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detail Employee</Modal.Title>
        <br />
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Full Name"
            value={employee.fullName}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            type="email"
            placeholder="Email"
            value={employee.email}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Position"
            value={employee.position}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Reporting Manager"
            value={employee.reportingManager}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Aditional Manager"
            value={employee.aditionalManager}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Leave"
            value={employee.leaveAvailable}
          />
          <Form.Control
            disabled={true}
            className="mb-3"
            placeholder="Level"
            value={employee.level == 1 ? "Superior" : "Staff"}
          />
        </Form>
      </Modal.Body>
    </Modal>
  );
}
