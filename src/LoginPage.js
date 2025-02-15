import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login attempted with:", { email, password, rememberMe });
    // Add server request logic here
  };

  return (
    <Container className="login-container">
      <Row>
        <Col xs={12}>
          <div className="login-box">
            <div className="login-header">
              <h3>Login</h3>
            </div>
            <Form className="login-form" onSubmit={handleSubmit}>
              <Form.Group className="form-group" controlId="formBasicEmail">
                <Form.Label className="form-label">Username / Email.com</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="form-group" controlId="formBasicPassword">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="form-group remember-me" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="login-button">
                Login
              </Button>

              <div className="login-link">
                <Link to="/signup">Don't have an account? Signup</Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
