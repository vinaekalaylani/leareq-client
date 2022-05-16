import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";

import searchApi from "../services/api";
import ModalCreate from "./modalCreate";
import ModalDetail from "./modalDetail";
import { success, error } from "./swal";

export default function EmployeeComp(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [show, setShow] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [reportingManager, setReportingManager] = useState("");
  const [aditionalManager, setAditionalManager] = useState("");
  const [leaveAvailable, setLeaveAvailable] = useState("");
  const [level, setLevel] = useState("");

  const router = useRouter();

  const handleShow = () => {
    getEmpCode();
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShowDetail = (id) => {
    props.getUser(id);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  const handleCreate = async (e) => {
    try {
      e.preventDefault();
      const data = {
        fullName,
        email,
        password,
        position,
        employeeCode,
        reportingManager,
        aditionalManager,
        leaveAvailable,
        level,
      };

      await searchApi.CreateUser(data);
      success();
      handleClose();

      const users = await searchApi.getListUser();
      props.setUsers(users);
      router.push("/employee");
    } catch (err) {
      error(err);
    }
  };

  const getEmpCode = () => {
    const code = "EMP" + Math.floor(Math.random() * 100000);
    setEmployeeCode(code);
  };

  return (
    <div>
      <div className="page-text">
        <h1>Employee</h1>
      </div>
      <ModalCreate
        show={show}
        handleClose={handleClose}
        handleCreate={handleCreate}
        fullName={fullName}
        email={email}
        password={password}
        position={position}
        employeeCode={employeeCode}
        reportingManager={reportingManager}
        aditionalManager={aditionalManager}
        leaveAvailable={leaveAvailable}
        level={level}
        setFullName={setFullName}
        setEmail={setEmail}
        setPassword={setPassword}
        setPosition={setPosition}
        setEmployeeCode={setEmployeeCode}
        setReportingManager={setReportingManager}
        setAditionalManager={setAditionalManager}
        setLeaveAvailable={setLeaveAvailable}
        setLevel={setLevel}
        managers={props.managers}
      />
      <ModalDetail
        show={showDetail}
        handleClose={handleCloseDetail}
        user={props.user}
        getUsers={props.getUsers}
      />
      <div
        className="btn-add d-flex justify-content-center align-items-center"
        style={{ color: "#fff", backgroundColor: "#FFD460" }}
        onClick={handleShow}
      >
        New Employee
      </div>
      <Row>
        {props.users.map((el) => (
          <Col
            xs={2}
            key={el.id}
            className="emp-row d-flex justify-content-center align-items-center"
          >
            <div onClick={() => handleShowDetail(el.id)}>
              <div className="d-flex justify-content-center">
                <div className="rounded-circle employee d-flex justify-content-center align-items-center">
                  <h3>{props.getInitial(el.fullName)}</h3>
                </div>
              </div>
              <div className="emp-text text-center">{el.fullName}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
