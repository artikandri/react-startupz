import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import CustomButton from "@/components/CustomButton";

const Contacts = () => {
  return (
    <Container id="Contact">
      <Row>
        <Col>
          <h2>Are you ready to board this rocket ship?</h2>
          <p>Share your excitement with us.</p>
        </Col>
      </Row>
      <Row>
        <Col md="5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <FloatingLabel controlId="floatingName" label="Name">
                <Form.Control type="email" placeholder="" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel controlId="floatingEmail" label="Email">
                <Form.Control type="email" placeholder="" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <FloatingLabel controlId="floatingMessage" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Form.Group>
            <CustomButton state={"dark"} type={"submit"}>
              Shoot us a message
            </CustomButton>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
