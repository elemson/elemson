import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default function MainSite() {
  return (
    <>
      <section className="site-bannner">
        <div className="main-site">
          <div className="container">
            <Container>
              <Row>
                <Col className="site-title" lg={6} md={12}>
                  <h3 className="title-text">HEY</h3>
                  <h1 className="title-text text-uppercase"> I am Elemson </h1>
                  <h4 className="title-text text-uppercase">
                    React + Python Developer
                  </h4>
                  <div className="site-buttons">
                    <div className="d-flex flex-row flex-wrap">
                      <Button className="button primary-button mr-4 text-uppercase">
                        hire me
                      </Button>
                      <Button className="button secondary-button text-uppercase">
                        {" "}
                        Get cv
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col className="site-image">
                  <Image src="/images/banner-image.png" fluid alt="d" />
                </Col>
              </Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
}
