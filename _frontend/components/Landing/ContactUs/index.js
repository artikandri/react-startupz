import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import CustomButton from "@/components/CustomButton";
import "./index.scss";

const ContactUs = () => {
  return (
    <div className="bg-secondary-yellow contact-us">
      <Container id="Contact">
        <Row>
          <Col md="8">
            <h2 className="text-white fw-bold fs-1-5">
              Are you ready to board this rocket ship?
            </h2>
            <p className="text-white fs-5">Share your excitement with us.</p>
          </Col>
        </Row>
        <Row className="mx-auto">
          <Col md="6">
            <Form className="contact-us__form">
              <Form.Group className="mb-3" controlId="formBasicName">
                <FloatingLabel controlId="floatingName" label="Name*">
                  <Form.Control type="email" placeholder="" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel controlId="floatingEmail" label="Email*">
                  <Form.Control type="email" placeholder="" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <FloatingLabel controlId="floatingMessage" label="Message*">
                  <Form.Control
                    as="textarea"
                    placeholder="Message"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3 text-center" controlId="formSubmit">
                <CustomButton state={"dark"} type={"submit"}>
                  Shoot us a message
                </CustomButton>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
