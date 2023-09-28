import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Quote = () => {
  return (
    <Container className="landing-quote">
      <Row>
        <Col className="text-center">
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
