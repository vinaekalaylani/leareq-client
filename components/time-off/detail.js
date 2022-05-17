import { Row, Col } from "react-bootstrap";

import searchApi from "../../services/api";
import { success, error } from "../swal";

export default function Detail(props) {
  const handleStatus = async (id, status) => {
    try {
      await searchApi.UpdateStatus(status, id);
      const leaves = await searchApi.getListLeaves();
      success()
      props.setLeaves(leaves);
    } catch (err) {
      error(err);
    }
  };

  return (
    <div className="detail-to" style={{ padding: "15px 20px 30px 20px" }}>
      <h3>Time Off Request</h3>
      <hr />
      <div className="detail-text">
        Full Name : {props?.user?.fullName}
      </div>
      <div className="detail-text">
        Position : {props?.user?.position}
      </div>
      <div className="detail-text">
        Employee Code : {props?.user?.employeeCode}
      </div>
      <div className="detail-text">
        Email : {props?.user?.email}
      </div>
      <div className="detail-text">
        Reporting Manager : {props?.user?.reportingManager}
      </div>
      <div className="detail-text">
        Aditional Manager : {props?.user?.aditionalManager}
      </div>
      <hr />
      <div className="detail-text">Type : {props?.leave.type}</div>
      <div className="detail-text">
        Day Type : {props?.leave.dayType}
      </div>
      <div className="detail-text">
        Date From : {props?.leave.dateFrom}
      </div>
      <div className="detail-text">Date To : {props?.leave.dateTo}</div>
      <div className="detail-text">Reason : {props?.leave.reason}</div>
      <div className="detail-text">Status : {props?.leave.status}</div>
      {props?.leave?.status === "Process" && props.level == 1 && (
        <Row
          className="d-flex justify-content-center"
          style={{ marginTop: "20px", marginLeft: "-40px" }}
        >
          <Col xs={3} style={{ marginInline: "10px" }}>
            <div className="btn d-flex justify-content-center align-items-center"
              style={{ color: "#fff", backgroundColor: "#1FAB89" }}
              onClick={() => handleStatus(props?.leave.id, "Approved")} >
              Approved
            </div>
          </Col>
          <Col xs={3} style={{ marginInline: "10px" }}>
            <div className="btn d-flex justify-content-center align-items-center"
              style={{ color: "#fff", backgroundColor: "#EF4B4B" }}
              onClick={() => handleStatus(props?.leave.id, "Rejected")} >
              Rejected
            </div>
          </Col>
        </Row>
      )}
    </div>

  );
}
