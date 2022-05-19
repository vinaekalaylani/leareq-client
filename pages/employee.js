import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import EmployeeComp from "../components/employee/employee";
import SideBar from "../components/sidebar";
import searchApi from "../services/api";
import { error } from '../components/swal';

export default function Employee() {
  const [employee, setEmployee] = useState({});
  const [employees, setEmployees] = useState([]);
  const [managers, setManagers] = useState([]);

  const getEmployees = async (params) => {
    try {
      const res = await searchApi.getListUser(params);
      setEmployees(res.data);
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  };

  const getEmployee = async (id) => {
    try {
      const res = await searchApi.getUser(id);
      setEmployee(res.data);
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  };

  const getManagers = async () => {
    try {
      const users = await searchApi.getListUser({ fullName: "", deleted: false });
      const res = users.data.filter((el) => el.level === 1);
      setManagers(res);
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  };

  useEffect(() => {
    getEmployees({ fullName: "", deleted: false });
    getManagers();
  }, []);

  return (
    <Container className="d-xl-block d-none">
      <Row className="container">
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <EmployeeComp
            managers={managers}
            employee={employee}
            employees={employees}
            setEmployees={setEmployees}
            getEmployee={getEmployee}
            getEmployees={getEmployees}
          />
        </Col>
      </Row>
    </Container>
  );
}
