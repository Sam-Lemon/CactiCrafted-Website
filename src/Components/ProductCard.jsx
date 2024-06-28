//this is going to be the basic card, image, plant name,
//link to go to the product page
import React from "react";
import { Card, Button } from 'react-bootstrap/';


export default function ProductCard ({succulents}) {
    console.log(succulents);
    if (!succulents) {
        return <div>No succulents available</div>;
    }

    return(
        <>

                <Card key={succulents.id} style={{ marginBottom: '20px' }}>
                    <Card.Img variant="top" src={succulents.imgURL} />
                    <Card.Body>
                        <Card.Title>{succulents.scientificName}</Card.Title>
                        <Card.Text>
                            Name: {succulents.name} <br />
                            Price: ${succulents.price}
                        </Card.Text>
                        <Button variant="success" onClick={() => handleAddToCart(succulents)}>Add to Cart</Button>
                    </Card.Body>
                </Card>

        </>
        );
    }

    const handleAddToCart = (succulent) => {
        //ADD LOGIC to put into card component
        console.log(`Added ${succulent.name} to cart`);
    };
