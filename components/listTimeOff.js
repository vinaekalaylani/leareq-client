import { Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import searchApi from '../services/api';

export default function TimeOffComp(props) {
  const router = useRouter()

  const handleDetail = async (id) => {
    const detail = await searchApi.getLeaveById({ id })
    props.setLeave(detail)
  }

  const handleStatus = async (id, status) => {
    try {
      const res = await searchApi.UpdateStatus(status, id)
      const leaves = await searchApi.getListLeaves()
      props.setLeaves(leaves)
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
            props.leaves.map(el => (
              <Row className="list-row d-flex align-items-center" key={el.id} onClick={() => handleDetail(el.id)}>
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
            <div className="detail-text">Full Name : {props?.leave?.User?.fullName}</div>
            <div className="detail-text">Position : {props?.leave?.User?.position}</div>
            <div className="detail-text">Employee Code : {props?.leave?.User?.employeeCode}</div>
            <div className="detail-text">Email : {props?.leave?.User?.email}</div>
            <div className="detail-text">Reporting Manager : {props?.leave?.User?.reportingManager}</div>
            <hr />
            <div className="detail-text">Type : {props?.leave?.type}</div>
            <div className="detail-text">Day Type : {props?.leave?.dayType}</div>
            <div className="detail-text">Date From : {props?.leave?.dateFrom}</div>
            <div className="detail-text">Date To : {props?.leave?.dateTo}</div>
            <div className="detail-text">Reason : {props?.leave?.reason}</div>
            <div className="detail-text">Status : {props?.leave?.status}</div>
            {
              props?.leave?.status === "Process" && props.level == 1 && (
                <Row className="d-flex justify-content-center" style={{ marginTop: "30px", marginLeft: "-40px" }}>
                  <Col xs={3} style={{ marginInline: "10px" }}>
                    <div className="btn d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#1FAB89" }} onClick={() => handleStatus(props?.leave?.id, "Approved")}>Approved</div>
                  </Col>
                  <Col xs={3} style={{ marginInline: "10px" }}>
                    <div className="btn d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#EF4B4B" }} onClick={() => handleStatus(props?.leave?.id, "Rejected")}>Rejected</div>
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
