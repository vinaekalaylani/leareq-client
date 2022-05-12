import { Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import axios from 'axios';

export default function TimeOffComp(props) {
  const router = useRouter()

  const handleStatus = async (id, status) => {
    try {
      const res = await axios.put(`http://localhost:3600/approve/${id}`, { status }, {
        headers: {
          access_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbE5hbWUiOiJCdW5nYSBNYXdhciBNZWxhdGkiLCJlbWFpbCI6ImJ1bmdhQG1haWwuY29tIiwibGV2ZWwiOjEsImlhdCI6MTY1MjI2MzUwOX0.oz10kCDjSVeNlTLHwcVN6SBcuH1UQpgQefz6PyWHKhQ`
        }
      })
      router.push(`?id=${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <div className="page-text">
        <h1>Time Off</h1>
      </div>
      <Row>
        <Col xs={9} className="to-container">
          {
            props.data.map(el => (
              <Row className="list-row d-flex align-items-center" key={el.id} onClick={() => router.push(`?id=${el.id}`)}>
                <Col xs={1} className="list-col" style={{ marginRight: "40px" }}>{el.User.employeeCode}</Col>
                <Col xs={4} className="list-col" style={{ marginRight: "-50px" }}>{el.User.fullName}</Col>
                <Col xs={1} className="list-col" style={{ marginRight: "10px" }}>{el.type}</Col>
                <Col xs={2} className="list-col" style={{ marginRight: "-1rem" }}>{el.status}</Col>
                <Col xs={3} className="list-col" style={{ margin: "0" }}>{el.dateFrom}</Col>
              </Row>
            ))
          }
        </Col>
        <Col xs={3}>
          <div className="detail-to" style={{ padding: "30px 20px 30px 20px" }}>
            <h3>Time Off Request</h3>
            <hr />
            <div className="detail-text">Full Name : {props?.data_id?.User?.fullName}</div>
            <div className="detail-text">Position : {props?.data_id?.User?.position}</div>
            <div className="detail-text">Employee Code : {props?.data_id?.User?.employeeCode}</div>
            <div className="detail-text">Email : {props?.data_id?.User?.email}</div>
            <div className="detail-text">Reporting Manager : {props?.data_id?.User?.reportingManager}</div>
            <hr />
            <div className="detail-text">Type : {props?.data_id?.type}</div>
            <div className="detail-text">Day Type : {props?.data_id?.dayType}</div>
            <div className="detail-text">Date : {props?.data_id?.dateFrom}</div>
            <div className="detail-text">Reason : {props?.data_id?.reason}</div>
            <div className="detail-text">Status : {props?.data_id?.status}</div>
            {
              props?.data_id?.status === "Process" && (
                <Row className="d-flex justify-content-center" style={{ marginTop: "50px", marginLeft: "-40px" }}>
                  <Col xs={3} style={{ marginInline: "10px" }}>
                    <div className="btn d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#1FAB89" }} onClick={() => handleStatus(props?.data_id?.id, "Approve")}>Approved</div>
                  </Col>
                  <Col xs={3} style={{ marginInline: "10px" }}>
                    <div className="btn d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#EF4B4B" }} onClick={() => handleStatus(props?.data_id?.id, "Rejected")}>Rejected</div>
                  </Col>
                </Row>
              )
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}
