//this is going to be the basic card, image, plant name,
//link to go to the product page
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function ProductCard () {

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="IMG FROM ARRAY OBJ" />
                <Card.Body>
                    <Card.Title>PLANT NAME</Card.Title>
                    <Card.Text>
                        PLANT PRICE
                    </Card.Text>
                    <Button variant="success">Add to Cart</Button>
                </Card.Body>
            </Card>
        
        
        
        </>
    );
}