import React, { useState } from "react";
import { Card, Row, Col, CardImg } from "react-bootstrap/";
import Counter from "./Counter";

export default function CartCard({ cartSucculent, onDelete }) {
    const [quantity, setQuantity] = useState(cartSucculent.quantity);

  /**Calculating the total price, taking the quantity and multiplying it by the price
   * of the succulent (from the API). I used toFixed to specify 2 decimal places
   * in the price. */
  const calcTotalPrice = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  /**Deleting the specified (by id) cartSucculent */
  const handleDeleteSucculent = () => {
    onDelete(cartSucculent.id);
  };

  console.log('CartCard props:', cartSucculent);

  return (
    <Card className="rounded-3 mb-2" key={cartSucculent.id}>
      <Card.Body className="p-4 m-0 mw-100">
        <Row className="justify-content-between align-items-center">
          <Col md="2" lg="2" xl="2">
            <CardImg
              className="rounded-3"
              src={cartSucculent.imgURL}
              alt={cartSucculent.scientificName}
            />
          </Col>

          <Col md="3" lg="3" xl="3">
            <h6>{cartSucculent.scientificName}</h6>
          </Col>

          <Col md="3" lg="3" xl="2" className="d-flex align-items-center justify-content-around">
            <Counter 
                initialCount={quantity}
                onChange={handleQuantityChange} 
                />
          </Col>

          <Col md="3" lg="2" xl="2" className="offset-lg-1">
            <p tag="h5" className="mb-0">
              ${calcTotalPrice(quantity, cartSucculent.price)}
            </p>
          </Col>

          <Col md="1" lg="1" xl="1" className="text-end">
            <a
              href="#!"
              className="text-secondary"
              onClick={handleDeleteSucculent}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
