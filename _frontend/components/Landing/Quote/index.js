import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./index.scss";

const Quote = () => {
  return (
    <Container className="landing-quote py-172">
      <Row className="mx-auto">
        <Col className="text-center mx-auto" md="9">
          <h2 className="text-primary-orange fs-2-5 landing-quote__title">
            Startups create a world that actually is better. Any problem that
            can be solved, will be solved by a startup, and that is a huge
            opportunity.
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Quote;
