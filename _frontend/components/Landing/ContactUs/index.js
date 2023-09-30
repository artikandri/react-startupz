import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import CustomButton from "@/components/CustomButton";
import * as formik from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "./index.scss";

function ContactUs() {
  const { Formik } = formik;

  const REQUIRED_MESSAGE = "This field is required";
  const schema = yup.object().shape({
    name: yup.string().required(REQUIRED_MESSAGE).min(3).max(50),
    email: yup.string().email().required(REQUIRED_MESSAGE),
    message: yup.string().required(REQUIRED_MESSAGE).max(1000),
  });

  const onContactUsFormSubmit = (form) => {
    console.log(form);
    toast.success(
      "Thank you for the interest! We will reach out to you soon.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      },
    );
  };

  return (
    <div className="bg-secondary-yellow contact-us py-140">
      <Container id="Contact">
        <Row>
          <Col md="8">
            <h2 className="text-white fw-bold fs-1-5">
              Are you ready to board this rocket ship?
            </h2>
            <p className="text-white fs-5">Share your excitement with us.</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="6">
            <Formik
              validationSchema={schema}
              onSubmit={onContactUsFormSubmit}
              validateOnChange={false}
              validateOnBlur={false}
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form
                  noValidate
                  className="contact-us__form"
                  onSubmit={handleSubmit}
                >
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <FloatingLabel controlId="name" label="Name*">
                      <Form.Control
                        required
                        type="text"
                        placeholder=""
                        value={values.name}
                        onChange={handleChange}
                        isValid={touched.name && !errors.name}
                      />
                    </FloatingLabel>
                    <Form.Control.Feedback
                      className="mt-2 fs-small text-danger text-capitalize "
                      type=""
                    >
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="email" label="Email*">
                      <Form.Control
                        required
                        type="email"
                        placeholder=""
                        value={values.email}
                        onChange={handleChange}
                        isValid={touched.email && !errors.email}
                      />
                    </FloatingLabel>
                    <Form.Control.Feedback
                      className="mt-2 fs-small text-danger  text-capitalize "
                      type=""
                    >
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <FloatingLabel controlId="message" label="Message*">
                      <Form.Control
                        required
                        as="textarea"
                        placeholder="Message"
                        style={{ height: "100px" }}
                        value={values.message}
                        onChange={handleChange}
                        isValid={touched.message && !errors.message}
                      />
                    </FloatingLabel>
                    <Form.Control.Feedback
                      className="mt-2 fs-small text-danger  text-capitalize "
                      type=""
                    >
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mt-4 d-block text-center"
                    controlId="formSubmit"
                  >
                    <CustomButton state={"dark"} type={"submit"}>
                      Shoot us a message
                    </CustomButton>
                  </Form.Group>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
