import { Modal, Form, Button } from "react-bootstrap";
export default function ModalCreate(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Employee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={props.handleCreate}>
          <Form.Control
            className="mb-3"
            placeholder="Full Name"
            value={props.fullName}
            onChange={(e) => props.setFullName(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            type="password"
            placeholder="Password"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            placeholder="Position"
            value={props.position}
            onChange={(e) => props.setPosition(e.target.value)}
          />
          <Form.Control
            className="mb-3"
            placeholder="Employee Code"
            disabled={true}
            value={props.employeeCode}
            onChange={(e) => props.setEmployeeCode(e.target.value)}
          />
          <Form.Select
            className="mb-3"
            value={props.reportingManager}
            onChange={(e) => props.setReportingManager(e.target.value)}
          >
            <option>Select Reporting Manager</option>
            {props.managers.map((el) => (
              <option key={el.id + "RM"} value={el.fullName}>
                {el.fullName}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className="mb-3"
            value={props.aditionalManager}
            onChange={(e) => props.setAditionalManager(e.target.value)}
          >
            <option>Select Aditional Manager</option>
            {props.managers.map((el) => (
              <option key={el.id + "AM"} value={el.fullName}>
                {el.fullName}
              </option>
            ))}
          </Form.Select>
          <Form.Control
            className="mb-3"
            placeholder="Leave"
            value={props.leaveAvailable}
            onChange={(e) => props.setLeaveAvailable(e.target.value)}
          />
          <Form.Select
            className="mb-3"
            value={props.level}
            onChange={(e) => props.setLevel(e.target.value)}
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
