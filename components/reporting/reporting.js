import { Row, Col } from "react-bootstrap";
import React from "react";

import Table from "./table";
import Filter from "./filter";

export default function ReportComp({ history, getHistory, years }) {
  return (
    <div>
      <div className="page-text">
        <h1>Report Leave</h1>
      </div>
      <Row>
        <Col xs={8}>
          <div className="report-container">
            <Table history={history} />
          </div>
        </Col>
        <Col xs={3}>
          <div
            className="filter-card"
            style={{ padding: "30px 20px 30px 20px" }}
          >
            <Filter getHistory={getHistory} years={years}/>
          </div>
        </Col>
      </Row>
    </div>
  );
}
