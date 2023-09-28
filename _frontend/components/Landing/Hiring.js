import React from "react";
import leftman from "@/assets/images/leftman.png";
import rightman from "@/assets/images/rightman.png";
import CustomButton from "@/components/CustomButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hiring = ({}) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>We are hiring!</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              We're always looking for talented people to join and help build
              our startups. <br />
              Check out our current openings
            </p>
            <CustomButton size={"lg"}>See current openings</CustomButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hiring;
