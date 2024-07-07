import React from "react";
import { Card, Button} from 'react-bootstrap';

export default function PayButton() {
  return (
    <Card>
      <Card.Body>
        <Button color="danger" block size="lg">
          Proceed to Pay
        </Button>
      </Card.Body>
    </Card>
  );
}
