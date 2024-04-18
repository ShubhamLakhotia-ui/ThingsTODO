import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-warning">Things</span>ToDO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="contact" className="contact mt-5 mb-5">
        <div className="title-section" style={{ backgroundColor: 'darkblue', padding: '20px 0', textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontWeight: 'bold' }}>Query Form</h1>
        </div>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card className="mt-4">
                <Card.Body>
                  <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridQuery">
                        <Form.Label>Query</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your query" />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check type="checkbox" label="I am over 18+ years of T&C" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      POST
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="text-center text-white mt-5" style={{ backgroundColor: 'darkblue', padding: '20px 0' }}>
        &copy; {new Date().getFullYear()} Darshan Gohil. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Contact;
