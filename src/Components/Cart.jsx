import Container from "react-bootstrap/esm/Container"


export function Cart () {





    return(
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee"}}>
            <Container className="py-5 h-100">
                <Row className="justify-content-center align-items-center h-100">
                    <Column size="12">
                        <Card className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <CardBody className="p-0">
                                <Row className="g-0">
                                    <Col lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <Typography tag="h1" className="fw-bold mb-0 text-black">
                                                    Shopping Cart
                                                </Typography>
                                                <Typography className="mb-0 text-muted">
                                                    3 items
                                                </Typography>
                                            </div>

                                            <hr className="my-4" />

                                            <Row className="mb-4 d-flex justify-content-between align-items-center">
                                                <Col md="2" lg="2" xl="2">
                                                    <CardImage
                                                        src="ATTACH IMAGE FROM API"
                                                        fluid className="rounded-3"
                                                        alt="ATTACH PLANT NAME FROM API"
                                                    />
                                                </Col>
                                                <Col md="3" lg="3" xl="3">
                                                    <Typography tag="h6" className="text-black mb-0">
                                                        Shirt
                                                    </Typography>
                                                    <Typography tag="h6" className="text-black mb-0">
                                                        Cotton T-shirt
                                                    </Typography>
                                                </Col>
                                                <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                    <Btn color="link" className="px-2">
                                                        <Icon />
                                                    </Btn>
                                                </Col>
                                            </Row>

                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Column>
                </Row>
            </Container>
        </section>
    )
}