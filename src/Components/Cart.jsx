import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import CardImg from "react-bootstrap/esm/CardImg";
import Button from "react-bootstrap/Button";



export function Cart () {





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
                                                <p tag="h1" className="fw-bold mb-0 text-black">
                                                    Shopping Cart
                                                </p>
                                                <p className="mb-0 text-muted">
                                                    3 items
                                                </p>
                                            </div>

                                            <hr className="my-4" />

                                            <Row className="mb-4 d-flex justify-content-between align-items-center">
                                                <Col md="2" lg="2" xl="2">
                                                    <CardImg
                                                        src="ATTACH IMAGE FROM API"
                                                        fluid className="rounded-3"
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
                                                    <Button color="link" className="px-2">
                                                    </Button>
                                                </Col>
                                            </Row>

                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}