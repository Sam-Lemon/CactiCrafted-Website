import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import CardText from "react-bootstrap/esm/CardText";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/esm/Image";


export default function Cart () {
    
    return(
        <section className="cart h-100 h-custom" style={{ backgroundColor: "#eee"}}>
            <Container className="py-5 h-100">
                <Row className="justify-content-center align-items-center h-100">
                    <Col size="12">
                        <Card className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <CardBody className="p-0">
                                <Row className="g-0">
                                    <Col lg="8">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-0 text-black">Shopping Cart</h3>

                                            <hr className="my-4" />

                                            <hr className="my-4"/>


                                            <hr className="my-4" />

                                            <div className="pt-5">
                                                <h6 className="mb-0">
                                                    <CardText tag="a" href="#!" className="text-body">
                                                        <Image 
                                                            fas="true" 
                                                            icon="long-arrow-alt-left me-2" 
                                                        />
                                                        Back to Shop
                                                    </CardText>
                                                </h6>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="4" className="bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">
                                                Summary
                                            </h3>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <h5 className="text-uppercase">
                                                    items 3
                                                </h5>
                                                <h5>ITEM PRICE</h5>
                                            </div>

                                            <h5 className="text-uppercase mb-3">
                                                Shipping
                                            </h5>

                                            <div className="mb-4 pb-2">
                                                <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                                                    <option value="1">Standard Delivery</option>
                                                    <option value="2">Fast Standard Delivery</option>
                                                    <option value="3">Expedited Shipping</option>
                                                    <option value="4">Overnight Shipping</option>
                                                </select>
                                            </div>

                                            <h5 className="text-uppercase mb-3">
                                                Give Code
                                            </h5>

                                            <div className="mb-5">
                                                {/* <Input size="lg" label="Enter your code" /> */}
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">
                                                    Total Price
                                                </h5>
                                                <h5> PRICE </h5>
                                            </div>

                                            <Button color="dark" block="true" size="lg">
                                                Continue
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}