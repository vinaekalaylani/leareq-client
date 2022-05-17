import { Row, Col } from "react-bootstrap";

import searchApi from "../../services/api";
import Detail from "./detail";

export default function ListTimeOff(props) {
  const handleDetail = async (id) => {
    const detail = await searchApi.getLeaveById({ id });
    props.setLeave(detail);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <div className="page-text">
        <h1>Time Off</h1>
      </div>
      <Row>
        <Col xs={9} className="to-container">
          {props.leaves.map((el) => (
            <Row className="list-row d-flex align-items-center"
              key={el.id}
              onClick={() => handleDetail(el.id)} >
              <Col xs={1} className="list-col" style={{ marginRight: "40px" }}>
                {el.User.employeeCode}
              </Col>
              <Col xs={4} className="list-col" style={{ marginRight: "-50px" }}>
                {el.User.fullName}
              </Col>
              <Col xs={1} className="list-col" style={{ marginRight: "10px" }}>
                {el.type}
              </Col>
              <Col xs={2} className="list-col" style={{ marginRight: "-1rem" }}>
                {el.status}
              </Col>
              <Col xs={3} className="list-col" style={{ margin: "0" }}>
                {el.dateFrom}
              </Col>
            </Row>
          ))}
        </Col>
        <Col xs={3}>
          <Detail user={props?.leave?.User} leave={props?.leave} level={props.level} setLeaves={props.setLeaves} />
        </Col>
      </Row>
    </div>
  );
}
