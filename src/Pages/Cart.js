import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import CardImg from "react-bootstrap/esm/CardImg";
import CardText from "react-bootstrap/esm/CardText";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/esm/Image";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Form from "react-bootstrap/esm/Form";


export default function Cart () {

    return(
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee"}}>
            <Container className="py-5 h-100">
                <Row className="justify-content-center align-items-center h-100">
                    <Col size="12">
                        <Card className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <CardBody className="p-0">
                                <Row className="g-0">
                                    <Col lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h3 className="fw-bold mb-0 text-black">
                                                    Shopping Cart
                                                </h3>
                                                <p className="mb-0 text-muted">
                                                    3 items
                                                </p>
                                            </div>

                                            <hr className="my-4" />

                                            <Row className="mb-4 d-flex justify-content-between align-items-center">
                                                <Col md="2" lg="2" xl="2">
                                                    <CardImg
                                                        src="ATTACH IMAGE FROM API"
                                                        fluid = "true"
                                                        className="rounded-3"
                                                        alt="ATTACH PLANT NAME FROM API"
                                                    />
                                                </Col>
                                                <Col md="3" lg="3" xl="3">
                                                    <p tag="h6" className="text-black mb-0">
                                                        Shirt
                                                    </p>
                                                    <p tag="h6" className="text-black mb-0">
                                                        Cotton T-shirt
                                                    </p>
                                                </Col>
                                                <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                    <InputGroup>
                                                        <Form.Control
                                                            placeholder="minus"
                                                            aria-label="minus"
                                                            aria-describedby="minus-addon1"
                                                        />

                                                    
                                                    </InputGroup>
                                                    
                                                    <Button color="link" className="px-2">
                                                        <Image 
                                                            fas="true" 
                                                            icon="minus" 
                                                        />
                                                    </Button>

                                                    {/* <Input type="number" min="0" defaultValue={1} size="sm" /> */}

                                                    <Button color="link" className="px-2">
                                                        <Image 
                                                            fas="true"                                                        
                                                            icon="plus" 
                                                        />
                                                    </Button>



                                                </Col>
                                                <Col md="3" lg="2" xl="2" className="text-end">
                                                    <h6 className="mb-0">COST OF SUCCULENT</h6>
                                                </Col>
                                                <Col md="1" lg="1" xl="1" className="text-end">
                                                    <a href ="#!" className="text-muted">
                                                        <Image 
                                                            fas="true" 
                                                            icon="times" 
                                                        />
                                                    </a>
                                                </Col> 
                                            </Row>

                                            <hr className="my-4"/>

                                            <Row className="mb-4 d-flex justify-content-between align-items-center">
                                                <Col md="2" lg="2" xl="2">
                                                    <CardImg
                                                        src="IMG NEEDED HERE"
                                                        fluid = "true"
                                                        className="rounded-3"
                                                        alt="IMG TITLE"
                                                        />
                                                </Col>
                                                <Col md="3" lg="3" xl="3">
                                                    <h6 className="text-muted">Shirt</h6>
                                                    <h6 className="text-black mb-0">Cotton T-shirt</h6>
                                                </Col>
                                                <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                    <Button color="link" className="px-2">
                                                        <Image 
                                                            fas="true" 
                                                            icon="minus" 
                                                        />
                                                    </Button>

                                                    {/* <Input type="number" min="0" defaultValue={1} size="sm" /> */}

                                                    <Button color="link" className="px-2">
                                                        <Image 
                                                            fas="true" 
                                                            icon="plus" 
                                                        />
                                                    </Button>
                                                </Col>
                                                <Col md="3" lg="2" xl="2" className="text-end">
                                                    <h6 className="mb-0">ITEM PRICE</h6>
                                                </Col>
                                                <Col md="1" lg="1" xl="1" className="text-end">
                                                    <a href="#!" className="text-muted">
                                                        <Image 
                                                            fas="true" 
                                                            icon="times" 
                                                        />
                                                    </a>
                                                </Col>
                                            </Row>

                                            <hr className="my-4" />

                                            <Row className="mb-4 d-flex justify-content-between align-items-center">
                                                <Col md="2" lg="2" xl="2">
                                                    <CardImg    
                                                        src="IMG SOURCE NEEDED"
                                                        fluid = "true"
                                                        className="rounded-3"
                                                        alt="IMG TITLE HERE"
                                                        />
                                                </Col>
                                                <Col md="3" lg="3" xl="3">
                                                    <h6 className="text-muted">Shirt</h6>
                                                    <h6 className="text-black mb-0">Cotton T-shirt</h6>
                                                </Col>
                                                <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                    <Button color="link" className="px-2">
                                                        <Image 
                                                            fas="true" 
                                                            icon ="minus" 
                                                        />
                                                    </Button>

                                                    {/* <Input type="number" min="0" defaultValue={1} size="sm" /> */}

                                                    <Button color="link" className="px-2">
                                                        <Image 
                                                            fas="true" 
                                                            icon="plus" 
                                                        />
                                                    </Button>
                                                </Col>
                                                <Col md="3" lg="2" xl="2" className="text-end">
                                                    <h6 className="mb-0">ITEM PRICE HERE</h6>
                                                </Col>
                                                <Col md="1" lg="1" xl="1" className="text-end">
                                                    <a href="#!" className="text-muted">
                                                        <Image 
                                                            fas="true" 
                                                            icon="times" 
                                                        />
                                                    </a>
                                                </Col>
                                            </Row>

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