import React from "react";
import leftman from "@/assets/images/leftman.png";
import rightman from "@/assets/images/rightman.png";
import CustomButton from "@/components/CustomButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hiring = ({}) => {
  return (
    <div className="bg-light-gray py-140">
      <Container>
        <Row>
          <Col className="text-center mx-auto" md="6">
            <h2 className="text-dark fs-2-5">We are hiring!</h2>
            <p className="text-primary-orange fs-5">
              We're always looking for talented people to join and help build
              our startups. <br />
              Check out our current openings
            </p>
            <CustomButton size={"md"} state={"primary"}>
              See current openings
            </CustomButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hiring;
