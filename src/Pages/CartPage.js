import React from "react";
import CartCard from '../Components/CartCard';
import { Container, Row, Col, Card, CardBody, InputGroup, Button } from 'react-bootstrap/';


export default function CartPage() {
    return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
    <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
        <Col md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
            </div>

            <CartCard />

 {/**Discount Code input and button */}
            <Card className="mb-4">
                <CardBody className="p-4 d-flex flex-row">
                    <InputGroup className="flex-fill">
                        <InputGroup.Text>Discount Code</InputGroup.Text>
                        <input type="text" className="form-control" />
                    </InputGroup>
                    <Button className="ms-3" color="danger" outline size="lg">
                        Apply
                    </Button>
                </CardBody>
            </Card>

{/**Proceed to Pay button */}
            <Card>
            <CardBody>
                <Button color="danger" block size="lg">
                    Proceed to Pay
                </Button>
            </CardBody>
            </Card>
        </Col>
        </Row>
    </Container>
    </section>
    );
}