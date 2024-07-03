import React from "react";
import { Card, Button } from 'react-bootstrap/';



export default function ProductCard ({cartSucculents}) {

    console.log(cartSucculents);

    return(
        <>
            <Card className="product-card" key={cartSucculents.id}>
                <Card.Img className="card-img" variant="top" src={cartSucculents.imgURL} />
                <Card.Body className="card-body">
                    <Card.Title className="card-title"><strong>{cartSucculents.scientificName}</strong></Card.Title>
                </Card.Body>
            </Card>
        </>
        );
    }

