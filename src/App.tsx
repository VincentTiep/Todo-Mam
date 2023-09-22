import { Col, Container, Row } from "react-bootstrap";
import Done from "./components/Done";
import "./App.css";
import Header from "./components/Header";
import Notyets from "./components/Notyets";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Main from "./pages/Main";

const App = () => {
  const [showMain, setShowMain] = useState(true);

  useEffect(() => {
    document.title = "Todo List";
  }, []);

  return (
    <>
      {showMain ? (
        <Routes>
          <Route
            path="/Todo-Mam/"
            element={<SignIn submit={setShowMain} />}
          ></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="main" element={<Main />}></Route>
        </Routes>
      ) : (
        <Container className="wrapper">
          <Row>
            <Col className="d-flex justify-content-center">
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <Notyets />
            </Col>
            <Col>
              <Tasks />
              <Done />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default App;
