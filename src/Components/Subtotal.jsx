import React, { useState, useEffect } from "react";
import { Card, InputGroup, Button } from "react-bootstrap";

/**Setting state for all of the different variables. I set the initial
 * state for the subtotal and finalTotal to 0. I also created the discount
 * code variable, with the discount code, and the percentage variable
 * with the percentage off the total the code offers.*/
export default function Subtotal({ cartItems }) {
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscountCode, setAppliedDiscountCode] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const DISCOUNT_CODE = "SAVE20";
  const DISCOUNT_PERCENTAGE = 0.2;

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateFinalTotal = (subtotal) => {
    if (appliedDiscountCode) {
      return (subtotal * (1 - DISCOUNT_PERCENTAGE)).toFixed(2);
    }
    return subtotal.toFixed(2);
  };

  useEffect(() => {
    const total = calculateSubtotal();
    setSubtotal(total);
    setFinalTotal(calculateFinalTotal(total));
  }, [cartItems, appliedDiscountCode]);


  const handleApplyDiscount = () => {
    if (discountCode === DISCOUNT_CODE) {
      setAppliedDiscountCode(true);
    } else {
      alert("Invalid discount code");
      setAppliedDiscountCode(false);
    }
    setDiscountCode("");
  };

  return (
    <Card
      className="mb-4"
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <Card.Body className="me-0" style={{ backgroundColor: "transparent", border: "none" }}>
        {/* <div className="d-flex justify-content-between align-items-center mb-3"> */}
          <div className="me-0 d-flex justify-content-end">
            <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
          </div>
          <div>
            <InputGroup>
              <InputGroup.Text>Discount Code</InputGroup.Text>
              <input
                type="text"
                className="form-control"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <Button
                className="ms-3"
                variant="success"
                size="md"
                onClick={handleApplyDiscount}
              >
                Apply
              </Button>
            </InputGroup>
          </div>
        {/* </div> */}
        <hr />
        <div className="me-0 d-flex justify-content-end">
          <h5>Total: ${finalTotal}</h5>
        </div>
      </Card.Body>
    </Card>
  );
}
