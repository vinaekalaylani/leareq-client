import { Row, Col } from "react-bootstrap";

import searchApi from "../../services/api";
import Detail from "./detail";
import Table from "./table";

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
          <Table leaves={props.leaves} handleDetail={handleDetail} />
        </Col>
        <Col xs={3}>
          <Detail user={props?.leave?.User} leave={props?.leave} level={props.level} setLeaves={props.setLeaves} />
        </Col>
      </Row>
    </div>
  );
}
