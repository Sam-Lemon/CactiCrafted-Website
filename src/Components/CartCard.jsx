import React from "react";
import Counter from "./Counter";
import { Card, CardBody, Row, Col, CardImg } from 'react-bootstrap/';



export default function CartCard ({cartSucculents}) {

    console.log("These are the " + cartSucculents);

    return(
        <Card className="rounded-3 mb-4" key={cartSucculents.id}>
            <CardBody className="p-4">
                <Row className="justify-content-between align-items-center">
                    <Col md="2" lg="2" xl="2">
                    <CardImg className="rounded-3" fluid
                        src={cartSucculents.img}
                        alt={cartSucculents.scientificName}
                        />
                    </Col>

                    <Col md="3" lg="3" xl="3">
                        <h3>PLANT NAME{cartSucculents.scientificName}</h3>
                    </Col>

                    <Col md="3" lg="3" xl="2" className="d-flex align-items-center justify-content-around">
                        <Counter />
                    </Col>

                    <Col md="3" lg="2" xl="2" className="offset-lg-1">
                        <p tag="h5" className="mb-0">
                            $EXAMPLE- NEED LOGIC FOR MATH
                        </p>
                    </Col>

                    <Col md="1" lg="1" xl="1" className="text-end">
                        <a href="#!" className="text-danger">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </a>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        );
    }

