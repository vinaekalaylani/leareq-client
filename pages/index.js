import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import PageComp from "../components/page";
import SideBar from "../components/sidebar";
import searchApi from "../services/api";
import { error } from "../components/swal";
import { useRouter } from "next/router";

export default function Home() {
  const [leaves, setLeaves] = useState([]);
  const [user, setUser] = useState({});
  const [initial, setInitial] = useState("");
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  const getInitial = async () => {
    try {
      const res = await searchApi.getInitial();
      setInitial(res);
    } catch (err) {
      error(err);
    }
  };

  const getUserLogin = async () => {
    try {
      const res = await searchApi.getUserLogin();
      setLeaves(
        res?.Leaves.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
      );
      setUser(res);
    } catch (err) {
      error(err);
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
    if (auth) {
      getUserLogin();
      getInitial();
    }
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
              setLeaves={setLeaves}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}
