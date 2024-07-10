import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import CartCard from "../Components/CartCard";
import PayButton from "../Components/PayButton";
import Subtotal from "../Components/Subtotal";
import { fetchCartSucculent, deleteCartSucculent } from "../API/CartApi";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  /**Fetching cart items from the cart API.*/
  const fetchCartItems = async () => {
    try {
      const data = await fetchCartSucculent();
      console.log("API response data:", data);

      /**Making sure that each item has a quantity of 1 by mapping through
       * the data and updates each item's quantity. If the quantity is 0 or
       * undefined it will default to 1.*/
      const updatedData = data.map((item) => ({
        ...item,
        quantity: item.quantity || 1, //if quantity is undefined or 0, it defaults to 1
      }));
      console.log("Updated data with default quantity:", updatedData);

      setCartItems(updatedData);
    } catch (e) {
      console.error("Error fetching cart item", e);
      throw e;
    }
  };

  /**Deleting a cart item by using the deleteCartSucculent function which is an 
   *API call.*/
  const handleDeleteCartItem = async (id) => {
    try {
      await deleteCartSucculent(id);
      console.log(`Deleted cart succulent with ID: ${id}`);

  /**This function updates the state of the cart items to not
   * include the deleted succulent.*/
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (e) {
      console.error("Error deleting cart succulent", e);
      throw e;
    }
  };

  /**This function takes the parameters, id and newQuantity and use them to
   * update the currently quantity of a succulent in the cart. Using the
   * setter function setCartItems, updates the state of the object. Each of the
   * prevItems is mapped over, and if the id matches the provided id, it creates
   * a copy of the object with the quantity property updated to whatever the
   * newQuantity is.*/
  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  /**Fetching the cartItems. */
  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <Container className="cart-container py-5 h-100">
        <Row className="cart-card justify-content-center align-items-center h-100">
          <Col md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="cart-title">Shopping Cart</h2>
            </div>

            <div>
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  cartSucculent={item}
                  onDelete={handleDeleteCartItem}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </div>
            <hr />

            {/**Discount Code input and button */}
            <Subtotal cartItems={cartItems} />

            {/**Proceed to Pay button */}
            <PayButton />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
