import React from "react";
import lamp from "@/assets/images/lamp.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const values = [
  {
    title: "Innovation",
    text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
  },
  {
    title: "People",
    text: "Talent is what enable us to create great companies.",
  },
];

const OurCoreValues = () => {
  return (
    <div className="bg-light-gray py-172 landing-ocv">
      <Container>
        <Row>
          <Col className="landing-ocv__title d-flex justify-content-between">
            <h2 className="fw-bold">Our core values</h2>
            <img className="lamp-icon" src={lamp} />
          </Col>
        </Row>
        <Row>
          {values.map((value, index) => {
            return (
              <Col key={index} md="6">
                <h3 className="text-primary-orange fw-bold fs-3-5">
                  {"0" + (index + 1)}. {value.title}
                </h3>
                <p className="fs-3-5">{value.text} </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default OurCoreValues;
