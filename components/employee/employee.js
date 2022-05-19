import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import ModalCreate from "./modalCreate";
import ModalDetail from "./modalDetail";
import ModalEdit from "./modalEdit";
import Table from "./table";

export default function EmployeeComp({ managers, employee, employees, getEmployee, getEmployees }) {
  const [show, setShow] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [name, setName] = useState("");

  const handleShow = () => {
    setShow(true);
  };

  const handleShowDetail = (id) => {
    getEmployee(id);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  const handleShowEdit = async (id) => {
    await getEmployee(id);
    if (employee) {
      setShowEdit(true);
    }
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  useEffect(() => {
    getEmployees({ fullName: name, deleted })
  }, [name, deleted])

  return (
    <div>
      <ModalCreate
        managers={managers}
        setShow={setShow}
        show={show}
        getEmployees={getEmployees}
      />
      <ModalDetail
        show={showDetail}
        employee={employee}
        handleClose={handleCloseDetail}
      />
      <ModalEdit
        show={showEdit}
        managers={managers}
        employee={employee}
        handleClose={handleCloseEdit}
        getEmployees={getEmployees}
      />

      <div className="page-text">
        <h1>Employee</h1>
      </div>
      <Row>
        <Col xs={8}>
          <div role="button" className="btn-add d-flex justify-content-center align-items-center"
            style={{ color: "#fff", backgroundColor: "#FFD460" }}
            onClick={handleShow}>
            New Employee
          </div>
        </Col>
        <Col xs={4} className="d-flex justify-content-end">
          <Form.Control
            className="mb-3"
            placeholder="Search by name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="emp-container">
        <Form.Check
          type="checkbox"
          label="Is Deleted"
          className="mx-3 mt-2"
          value={deleted}
          onChange={() => setDeleted(!deleted)}
          checked={deleted}
        />
        <Table getEmployees={getEmployees} employees={employees} handleShow={handleShowDetail} handleShowEdit={handleShowEdit} />
      </Row>
    </div >
  );
}
