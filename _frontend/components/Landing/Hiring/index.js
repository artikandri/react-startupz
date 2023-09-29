import React from "react";
import CustomButton from "@/components/CustomButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { toast } from "react-toastify";
import "./index.scss";

const Hiring = ({}) => {
  const onClickSeeOpeningsButton = () => {
    toast.warn("Sorry, this feature is not ready yet");
  };

  return (
    <div className="bg-light-gray py-140 landing-hiring" id="Hiring">
      <Container>
        <Row>
          <Col className="text-center mx-auto" md="6">
            <h2 className="text-dark fs-2-5 mb-4">We are hiring!</h2>
            <p className="text-primary-orange fs-5 mb-4">
              We're always looking for talented people to join and help build
              our startups. <br />
              Check out our current openings
            </p>
            <CustomButton
              state={"primary"}
              name={"see current openings"}
              type={"button"}
              onClick={onClickSeeOpeningsButton}
            >
              See current openings
            </CustomButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hiring;
