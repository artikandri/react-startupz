import React from "react";
import pc1 from "@/assets/images/pc1.png";
import pc2 from "@/assets/images/pc2.png";
import pc3 from "@/assets/images/pc3.png";
import pc4 from "@/assets/images/pc4.png";
import CustomButton from "@/components/CustomButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { toast } from "react-toastify";
import "./index.scss";

export default function OurWorks() {
  const onClickMoreButton = () => {
    toast.warn("Sorry, this feature is not ready yet");
  };

  const workData = [
    {
      title: "Tolq",
      description:
        "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
      image: pc1,
      titleClassName: "text-light-green",
      onClickMoreButton,
    },
    {
      title: "Feedback Labs",
      description:
        "Feedback Labs turns feedback into actionable insights for your team.",
      image: pc2,
      titleClassName: "text-light-blue",
      onClickMoreButton,
    },
    {
      title: "Codekeeper",
      description:
        "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
      image: pc3,
      titleClassName: "text-deep-green",
      onClickMoreButton,
    },
    {
      title: "LegalSite",
      description:
        "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
      image: pc4,
      titleClassName: "text-purple",
      onClickMoreButton,
    },
  ];

  return (
    <Container id="OurWorks" className="landing-ow py-140">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center fw-bold text-dark">Our works</h2>
        </Col>
      </Row>
      <Row>
        {workData.map((work, index) => {
          return (
            <Col key={index} md="6" xs="12">
              <Card className="landing-ow__card">
                <Card.Title
                  className={`${work.titleClassName} text-center fs-3`}
                >
                  {work.title}
                </Card.Title>
                <Card.Body className="">
                  <Card.Text className="text-dark text-center fs-small">
                    {work.description}
                  </Card.Text>
                  <Card.Img variant="top" src={work.image} className="image" />
                </Card.Body>
                <CustomButton
                  type={"button"}
                  state={"light"}
                  name={"More"}
                  onClick={work.onClickMoreButton}
                  className={"landing-ow__card-button"}
                  aria-expanded="false"
                >
                  More
                </CustomButton>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
