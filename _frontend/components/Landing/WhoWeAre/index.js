import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import questionMark from "@/assets/images/questionMark.png";
import "./index.scss";

const items = [
  {
    text: " We develop innovative products, systems and services",
  },
  {
    text: " Next we build teams to scale them into companies",
  },
  {
    text: "Each startup solving one problem at a time",
  },
];

const WhoWeAre = () => {
  return (
    <div className="bg-light-gray landing-wwa py-140">
      <Container>
        <Row>
          <Col className="mb-5">
            <div className="landing-wwa__title">
              <h2 className="text-dark fw-bold fs-2">Who we are</h2>
              <img src={questionMark} className="question-mark" />
            </div>
            <p className="text-primary-orange fs-5">
              We create products that have innovation and technology at their
              core. <br /> We value working with talented people that understand
              the possibilities of today.
            </p>
          </Col>
        </Row>
        <Row className="landing-wwa__list">
          {items.map((item, index) => {
            return (
              <Col
                key={index}
                md="4"
                className="fs-3-5 landing-wwa__list__item"
              >
                <span className="text-primary-orange fw-bold index d-inline-block">
                  {"0" + (index + 1)}
                </span>
                <p className="text-dark mt-2"> {item.text}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default WhoWeAre;
