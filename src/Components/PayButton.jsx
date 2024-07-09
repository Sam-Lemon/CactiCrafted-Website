import React from "react";
import { Button, Card } from "react-bootstrap";

/**I styled the PayButton component with a transparent background.*/
export default function PayButton() {
  return (
    <Card style={{ backgroundColor: "transparent", border: "none" }}>
      <Card.Body
        className="me-0"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <Button className="btn-success" size="md">
          Proceed to Pay
        </Button>
      </Card.Body>
    </Card>
  );
}
