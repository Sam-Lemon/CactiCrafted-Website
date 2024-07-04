
import React from "react";
import { Card, Button } from 'react-bootstrap/';
import { putCart } from "../API/CartApi";



export default function ProductCard ({succulents}) {

    console.log(succulents);

    const handleAddToCart = (succulent) => {
        console.log(`Added ${succulents.name} to cart`);
        putCart(succulent)
            .then(updatedSucculent => {
                console.log('Successfully added to cart:', updatedSucculent);
            })
            .catch (error => {
                console.error ('Failed to add to cart:', error)
            });
    };


    return(
            <Card className="product-card" key={succulents.id}>
                <Card.Img className="card-img" variant="top" src={succulents.imgURL} />
                <Card.Body className="card-body">
                    <Card.Title className="card-title"><strong>{succulents.scientificName}</strong></Card.Title>
                    <Card.Text className="card-text">
                        <div className="succ-name">
                            "{succulents.name}"
                        </div>
                        <div className="succ-price">
                            ${succulents.price}
                        </div>
                    </Card.Text>
                    <Button className="add-cart" variant="success" onClick={() => handleAddToCart(succulents)}>Add to Cart</Button>
                </Card.Body>
            </Card>
        );
    }





