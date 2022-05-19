import { Row, Col } from "react-bootstrap";

import Detail from "./detail";
import Table from "./table";

export default function ListLeave(props) {
  return (
    <div style={{ marginTop: "40px" }}>
      <div className="page-text">
        <h1>Leave</h1>
      </div>
      <Row>
        <Col xs={8} className="to-container">
          <Table leaves={props.leaves} setLeave={props.setLeave} />
        </Col>
        <Col xs={3} className="ms-3">
          <Detail user={props?.leave?.User} leave={props?.leave} level={props.level} setLeaves={props.setLeaves} />
        </Col>
      </Row>
    </div>
  );
}
