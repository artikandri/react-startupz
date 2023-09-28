import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import questionMark from "@/assets/images/questionMark.png";

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
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <h2 className="">Who we are</h2>
              <img src={questionMark} className="question-mark" />
            </div>
            <p className="">
              We create products that have innovation and technology at their
              core. <br /> We value working with talented people that understand
              the possibilities of today.
            </p>
          </Col>
        </Row>
        <Row>
          {items.map((item, index) => {
            return (
              <Col key={index} md="4">
                <span>{"0" + (index + 1)}</span>
                <p> {item.text}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default WhoWeAre;
