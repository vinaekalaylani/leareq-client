import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import PageComp from "../components/homepage/page";
import SideBar from "../components/sidebar";
import searchApi from "../services/api";
import { error } from "../components/swal";

export default function Home() {
  const [leaves, setLeaves] = useState([]);
  const [user, setUser] = useState({});
  const [initial, setInitial] = useState("");
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  const getInitial = async () => {
    try {
      const res = await searchApi.getInitial();
      setInitial(res.data);
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  };

  const getUserLogin = async () => {
    try {
      const res = await searchApi.getUserLogin();
      setLeaves(
        res?.data.Leaves.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
      );
      setUser(res.data);
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  };

  const Auth = () => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      router.push("/login");
    } else {
      setAuth(true);
    }
  };

  useEffect(() => {
    Auth();
    getUserLogin();
    getInitial();
  }, []);

  return (
    <Container className="d-xl-block d-none">
      {auth && (
        <Row className="container">
          <Col xs={3}>
            <SideBar />
          </Col>
          <Col xs={9}>
            <PageComp
              user={user}
              leaves={leaves}
              initial={initial}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}
