import React from "react";
import { Row, Col, Image } from 'react-bootstrap/';

export default function CartSucculent ( {cartSucculents}) {

    console.log(cartSucculents);

    const sumSucculents() {
        
    }

    return (
        <Row key={cartSucculents.id} className="mb-4 d-flex justify-content-between align-items-center">
                                                
        <Col md="2" lg="2" xl="2">
            Succulent Image
            <Image src={cartSucculents.img} alt={cartSucculents.scientificName} rounded />
        </Col>

        <Col md="3" lg="3" xl="3">
            <p tag="h6" className="text-black mb-0">
                Succulent Name
                {cartSucculents.scientificName}
            </p>
        </Col>



        <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
            <p>
                sumSucculents();
            </p>
            <Button color="link" className="px-3">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </Button>
            <Button color="link" className="px-3">
                <i class="fa fa-minus" aria-hidden="true"></i>
            </Button>

        </Col>



        <Col md="3" lg="2" xl="2" className="text-end">
            Price of Succulent
            <h6 className="mb-0">{cartSucculents.price}</h6>
        </Col>
    </Row>

        
    );
}