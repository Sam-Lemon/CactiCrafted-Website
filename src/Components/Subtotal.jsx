import React, { useState, useEffect } from "react";
import { Card, InputGroup, Button } from "react-bootstrap";

export default function Subtotal({ cartItems }) {
  const [discountCode, setDiscountCode] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const DISCOUNT_CODE = "SAVE20";
  const DISCOUNT_PERCENTAGE = 0.2;

  useEffect(() => {
    const calculateSubtotal = () => {
      const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setSubtotal(total);
      setFinalTotal(total);
    };

    calculateSubtotal();
  }, [cartItems]);

  const handleApplyDiscount = () => {
    if (discountCode === DISCOUNT_CODE) {
      const discountedTotal = subtotal * (1 - DISCOUNT_PERCENTAGE);
      setFinalTotal(discountedTotal);
    } else {
      alert("Invalid discount code");
    }
    setDiscountCode("");
  };

  return (
    <Card
      className="mb-4"
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <Card.Body
        className="p-2 d-flex flex-col justify-content-end me-0"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <InputGroup className="flex-fill">
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
      </Card.Body>
      <Card.Body
        className="p-2 d-flex flex-row me-0"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <h3 className="total-title">Total: ${finalTotal.toFixed(2)}</h3>
      </Card.Body>
    </Card>
  );
}
