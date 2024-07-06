import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginForm(props) {
  /**Setting the state for email and password. */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**Because a form is being used, onSubmit calls handleSubmit. Forms use onSubmit in the parent div
   * instead of an event listener on the button. e.preventDefault prevents the default form
   * submission behavior of reloading the page.*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    //Resets email and password field after submission.
    setEmail("");
    setPassword("");
  };

  /**Using the React Bootstrap Form components, each input has the onChange
   * handler that updates the state of the particular input.
   */
  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <h3 className="text-center">Login</h3>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me logged in." />
      </Form.Group>
      <div className="text-center">
        <Button className=" login-btn" type="submit">
          Log In
        </Button>
      </div>
      <div className="text-center">
        <Button
          className="link-btn"
          variant="link"
          onClick={(e) => props.onFormSwitch("register")}>
          Don't have an account? Register here.
        </Button>
      </div>
    </Form>
  );
}
