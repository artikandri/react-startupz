import React, { useEffect } from "react";
import pc1 from "@/assets/images/pc1.png";
import pc2 from "@/assets/images/pc2.png";
import pc3 from "@/assets/images/pc3.png";
import pc4 from "@/assets/images/pc4.png";
import CustomButton from "@/components/CustomButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const workData = [
  {
    title: "Tolq",
    description:
      "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
    image: pc1,
    color: "#a9bc87",
  },
  {
    title: "Feedback Labs",
    description:
      "Feedback Labs turns feedback into actionable insights for your team.",
    image: pc2,
    color: "#8bb5c9",
  },
  {
    title: "Codekeeper",
    description:
      "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
    image: pc3,
    color: "#00a0b6",
  },
  {
    title: "LegalSite",
    description:
      "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
    image: pc4,
    color: "#8b60d3",
  },
];

export default function OurWorks() {
  return (
    <Container id="OurWorks">
      <Row>
        <Col>
          <h2>Our works</h2>
        </Col>
      </Row>
      <Row>
        {workData.map((work, index) => {
          return (
            <Col key={index} md="6" xs="12">
              <Card>
                <Card.Body>
                  <Card.Title>{work.title}</Card.Title>
                  <Card.Text>{work.description}</Card.Text>
                </Card.Body>
                <Card.Img variant="top" src={work.image} />
                <CustomButton
                  type={"button"}
                  state={"light"}
                  name={"More"}
                  className={"mt-4 "}
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
