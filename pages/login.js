import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post('http://localhost:3600/login', { email, password })
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePass = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Container className="d-xl-block d-none">
      <div className="d-flex align-items-center justify-content-center">
        <Row className="login-container" style={{ marginTop: "7rem" }}>
          <Col style={{ marginLeft: "-12px" }}>
            <Image
              src="/login1.jpg"
              className="image-login"
              width="430px"
              height="600px"
            />
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <h1 className="title-login">LEAREQ</h1>
            </div>
            <div className="d-flex justify-content-center" style={{ marginTop: "3rem" }}>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="Email" name="email" value={email} onChange={handleEmail} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handlePass} />
                </Form.Group>
                <div className="d-flex justify-content-center" style={{ marginTop: "3rem" }}>
                  <Button type="submit" className="btn-add d-flex justify-content-center align-items-center" style={{ color: "#fff", backgroundColor: "#05499C" }}>LOGIN
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}