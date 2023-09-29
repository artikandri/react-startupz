import React from "react";
import lamp from "@/assets/images/lamp.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./index.scss";

const values = [
  {
    title: "Innovation",
    text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
    col: "7",
  },
  {
    title: "People",
    text: "Talent is what enable us to create great companies.",
    col: "5",
  },
];

const OurCoreValues = () => {
  return (
    <div className="bg-light-gray py-172 landing-ocv">
      <Container>
        <Row className="landing-ocv-title">
          <Col className="d-flex justify-content-between align-items-center">
            <h2 className="fw-bold">Our core values</h2>
            <img className="lamp-icon" src={lamp} />
          </Col>
        </Row>
        <Row className="landing-ocv-list">
          {values.map((value, index) => {
            return (
              <Col
                key={index}
                md={value.col}
                className="landing-ocv-list__item"
              >
                <h3 className="text-primary-orange fw-bold index fs-3-5 mb-55 d-block ">
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
