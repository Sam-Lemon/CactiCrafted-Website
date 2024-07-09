import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function RegForm(props) {
  /**Setting the state for the first and last name, email, and password.*/
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**On submit, the handleSubmit function is called, which logs
   * all the new inputs and resets the fields to empty.*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);

    //Resets email and password field after submission.
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  /**Returning the register form, which onSubmit calls the handleSubmit function.
   * On a change in the Form.Controls, the newly inputted values are updated.*/
  return (
    <Form className="reg-form" onSubmit={handleSubmit}>
      <h3 className="text-center">Register</h3>
      <Form.Group className="mb-3" controlId="formGroupFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <div className="text-center">
        <Button className=" login-btn" type="submit">
          Register
        </Button>
      </div>
      <div className="text-center">
        <Button
          className="link-btn"
          variant="link"
          onClick={(e) => props.onFormSwitch("login")}
        >
          Have an account? Login here.
        </Button>
      </div>
    </Form>
  );
}
