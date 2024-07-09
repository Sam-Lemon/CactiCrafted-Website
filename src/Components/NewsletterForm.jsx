import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { postUser } from "../API/UsersApi";

export default function NewsletterSignup() {
  /**Setting the state for newsName, newsEmail, and key
   * (which will control the rerender)*/
  const [newsName, setNewsName] = useState("");
  const [newsEmail, setNewsEmail] = useState("");
  const [key, setKey] = useState(0);

  /**This asynchronous function uses e.preventDefault to prevent the form's
   * default action of reloading, and then console logs the inputted
   * name and email. A try-catch statement calls the postUser function
   * from the API component (and was imported above) which posts
   * the newly inputted data into the user API.*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Newsletter Name: ", newsName);
    console.log("Newsletter Email: ", newsEmail);

    try {
      const updateUser = await postUser(newsName, newsEmail);
      console.log("Successfully updated user:", updateUser);

      //Resets name and email field after submission.
      setNewsName("");
      setNewsEmail("");

      //increment the key to force a re-render
      setKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  /**The form that will be rendered. On submit the handleSubmit function is called
   * and the inputs have an onChange event listener that
   * updates the newly inputted information.
   */
  return (
    <>
      <Form key={key} className="newsletter-signup" onSubmit={handleSubmit}>
        <Form.Group className="news-input-name">
          <Form.Control
            type="name"
            placeholder="Name"
            onChange={(e) => setNewsName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="new-input-email">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setNewsEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="text-center">
          <Button className="news-btn text-center" type="submit">
            Join List
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
