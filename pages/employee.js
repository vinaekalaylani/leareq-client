import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import EmployeeComp from "../components/employee/employee";
import SideBar from "../components/sidebar";
import searchApi from "../services/api";

export default function Employee() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [managers, setManagers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await searchApi.getListUser();
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (id) => {
    try {
      const res = await searchApi.getUser(id);
      setUser(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getManagers = async () => {
    try {
      const users = await searchApi.getListUser();
      const res = users.filter((el) => el.level === 1);
      setManagers(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getInitial = (name) => {
    const arrName = name.split(" ");
    let initial = "";
    if (arrName.length > 1) {
      initial = arrName[0][0] + arrName[1][0];
    } else {
      initial = arrName[0][0];
    }
    initial = initial.toUpperCase();
    return initial;
  };

  useEffect(() => {
    getUsers();
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
            users={users}
            setUsers={setUsers}
            user={user}
            getUser={getUser}
            getInitial={getInitial}
            getUsers={getUsers}
          />
        </Col>
      </Row>
    </Container>
  );
}
