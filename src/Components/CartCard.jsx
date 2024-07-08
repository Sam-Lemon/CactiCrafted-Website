import React from "react";
import { updateCartSucculent } from "../API/CartApi";
import Counter from "./Counter";
import { Card, Row, Col, CardImg } from "react-bootstrap/";

export default function CartCard({
  cartSucculent,
  onDelete,
  onUpdateQuantity
}) {
  /**Sets the quantity to whatever the new quantity is. */
  const handleQuantityChange = async (newQuantity) => {
    try {
      await updateCartSucculent(cartSucculent.id, { quantity: newQuantity });
      onUpdateQuantity(cartSucculent.id, newQuantity);
    } catch (e) {
      console.error("Error updating quantity:", e);
    }
  };

  /**Calculating the total price, taking the quantity and multiplying it by the price
   * of the succulent (from the API). I used toFixed to specify 2 decimal places
   * in the price. */
  const calcTotalPrice = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  /**Deleting the specified (by id) cartSucculent */
  const handleDeleteSucculent = () => {
    onDelete(cartSucculent.id);
  };

  console.log("CartCard props:", cartSucculent);

  return (
    <Card className="rounded-3 mb-2" key={cartSucculent.id}>
      <Card.Body className="rounded p-4 m-0 mw-100">
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

          <Col
            md="3"
            lg="3"
            xl="2"
            className="d-flex align-items-center justify-content-around"
          >
            {/* /**The Counter component is added here. It takes a the quantity, and
  when it is changed, either by pressing the + or - buttons next to it,
  it calls the handleQuantityChange function from above and updates
  the quantity appropriately. */}
            <Counter
              initialCount={cartSucculent.quantity}
              onChange={handleQuantityChange}
            />
          </Col>

          {/* /**Calling the calcTotalPrice function from above, passes the
  quantity of the succulent and the price to calculate the total price. */}
          <Col md="3" lg="2" xl="2" className="offset-lg-1">
            <h5 className="mb-0">{calcTotalPrice(cartSucculent.quantity, cartSucculent.price)}</h5>
          </Col>

          {/* /**On the click of the button, handleDeleteSucculent, from above, is 
  called and that succulent is deleted. */}
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
