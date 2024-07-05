
import React from "react";
import { Card, Button } from 'react-bootstrap/';
import { addToCart } from "../API/CartApi";



export default function ProductCard ({ succulent }) {
    const handleAddToCart = () => {
        const succulentData = {
            id: succulent.id,
            name: succulent.name,
            price: succulent.price,
            imgURL: succulent.imgURL,
            scientificName: succulent.scientificName,
            quantity: 1,
        };

        console.log(`Added ${succulent.name} to cart:`, succulentData);

        addToCart(succulentData)
            .then(addedSucculent => {
                console.log('Successfully added to cart:', addedSucculent);
            })
            .catch (error => {
                console.error ('Failed to add to cart:', error)
            });
    };


    return(
        <Card className="product-card" key={succulent.id}>
            <Card.Img className="card-img" variant="top" src={succulent.imgURL} />
            <Card.Body className="card-body">
                <Card.Title className="card-title"><strong>{succulent.scientificName}</strong></Card.Title>
                <Card.Text className="card-text">
                    <span className="succ-name">
                        "{succulent.name}"
                    </span>
                    <span className="succ-price">
                        ${succulent.price}
                    </span>
                </Card.Text>
                <Button className="add-cart" variant="success" onClick={() => handleAddToCart(succulent)}>Add to Cart</Button>
            </Card.Body>
        </Card>
        );
    }





