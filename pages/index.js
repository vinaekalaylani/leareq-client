import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  return (
    <Container className="d-xl-block d-none">
      <div className="d-flex align-items-center justify-content-center">
        <Row className="login-container" style={{ marginTop: "7rem" }}>
          <Col style={{ marginLeft: "-12px" }}>
            <Image
              src="/login.svg"
              className="image-login"
              width="400px"
              height="524px"
            />
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <h1 className="title-login">LEAREQ</h1>
            </div>
            <div className="d-flex justify-content-center" style={{ marginTop: "3rem" }}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-flex justify-content-center" style={{ marginTop: "3rem" }}>
                  <div className="btn-add d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#FECD1A" }}>
                    <Link href="/dashboard">
                      <div>LOGIN</div>
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

// export async function getServerSideProps() {
// 	const res = await fetch()
// 	const dataUser = await res.json()
// 	return {
// 		props: {
// 			dataUser,
//       page: Number(page)
// 		}
// 	}
// }
