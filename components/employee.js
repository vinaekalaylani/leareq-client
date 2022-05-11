import { Row, Col } from 'react-bootstrap';

export default function EmployeeComp() {
  return (
    <div>
      <div className="page-text">
        <h1>Employee</h1>
      </div>
      <div className="btn-add d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#FFD460" }}>New Employee</div>
      <Row>
        <Col xs={2} className="emp-row d-flex justify-content-center align-items-center">
          <div>
            <div className="rounded-circle employee d-flex justify-content-center align-items-center">
              <h3>BM</h3>
            </div>
            <div className="emp-text">Bunga Mawar</div>
          </div>
        </Col>
        <Col xs={2} className="emp-row d-flex justify-content-center align-items-center">
          <div>
            <div className="rounded-circle employee d-flex justify-content-center align-items-center">
              <h3>BM</h3>
            </div>
            <div className="emp-text">Bunga Mawar</div>
          </div>
        </Col>
        <Col xs={2} className="emp-row d-flex justify-content-center align-items-center">
          <div>
            <div className="rounded-circle employee d-flex justify-content-center align-items-center">
              <h3>BM</h3>
            </div>
            <div className="emp-text">Bunga Mawar</div>
          </div>
        </Col>
        <Col xs={2} className="emp-row d-flex justify-content-center align-items-center">
          <div>
            <div className="rounded-circle employee d-flex justify-content-center align-items-center">
              <h3>BM</h3>
            </div>
            <div className="emp-text">Bunga Mawar</div>
          </div>
        </Col>
        <Col xs={2} className="emp-row d-flex justify-content-center align-items-center">
          <div>
            <div className="rounded-circle employee d-flex justify-content-center align-items-center">
              <h3>BM</h3>
            </div>
            <div className="emp-text">Bunga Mawar</div>
          </div>
        </Col>
        <Col xs={2} className="emp-row d-flex justify-content-center align-items-center">
          <div>
            <div className="rounded-circle employee d-flex justify-content-center align-items-center">
              <h3>BM</h3>
            </div>
            <div className="emp-text">Bunga Mawar</div>
          </div>
        </Col>
        <Col xs={2} className="emp-row d-flex justify-content-center align-items-center">
          <div>
            <div className="rounded-circle employee d-flex justify-content-center align-items-center">
              <h3>BM</h3>
            </div>
            <div className="emp-text">Bunga Mawar</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
