import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

function LandingPage() {
  return (
    <Container className="landing-container">
      <Row>
        <Col md={12} className="text-center landing-content">
          <h2>Welcome!</h2>
          <Link to="/login">
            <Button variant="primary" className="m-2 landing-button">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="success" className="m-2 landing-button">
              Signup
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
