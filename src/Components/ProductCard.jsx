//this is going to be the basic card, image, plant name,
//link to go to the product page
import React from "react";
import { Card, Button } from 'react-bootstrap/';


export default function ProductCard ({succulents}) {

    if (!succulents) {
        return <div>No succulents available</div>;
    }

    return(
        <>
            {succulents.map((succulent, index) => (
                <Card key={index} style={{ width: '18rem', marginBottom: '20px' }}>
                    <Card.Img variant="top" src={succulent.img} />
                    <Card.Body>
                        <Card.Title>{succulent.scientificName}</Card.Title>
                        <Card.Text>
                            Name: {succulent.name} <br />
                            Price: ${succulent.price}
                        </Card.Text>
                        <Button variant="success" onClick={() => handleAddToCart(succulent)}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
        );
    }

    const handleAddToCart = (succulent) => {
        //ADD LOGIC to put into card component
        console.log(`Added ${succulent.name} to cart`);
    };






