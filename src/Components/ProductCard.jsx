
import React from "react";
import { Card, Button } from 'react-bootstrap/';
import { addToCart } from "../API/CartApi";



export default function ProductCard ({ succulent }) {

/**Function to add succulent information to the cart API on click of
 * the "Add to Cart" button. succulentData initializes an object that
 * pulls the required information from the component props.*/    
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

/**Calling this function performs a post request to the API, adding
 * the succulent to the cart API. If it doesn't work an error will be
 * shown.*/
        addToCart(succulentData)
            .then(addedSucculent => {
                console.log('Successfully added to cart:', addedSucculent);
            })
            .catch (error => {
                console.error ('Failed to add to cart:', error)
            });
    };


/**Returning the ProductCard. Each card gets it's own unique key, image, names,
 * and price using the array properties. At the bottom is a button to add the 
 * succulent to the card using an event listener and calling the above
 * handleAddToCart function, passing the succulent as a prop.
 */
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





