

import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function NewsletterSignup () {
    const [newsName, setNewsName] = useState("");
    const [newsEmail, setNewsEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Newsletter Name: ", newsName);
        console.log("Newsletter Email: ", newsEmail);

        //Resets name and email field after submission.
        setNewsName("");
        setNewsEmail("")
    }

    return (
        <>
            <Form className="newsletter-signup" onSubmit={handleSubmit}>
                <Form.Group className="news-input-name">
                    <Form.Control type='name' placeholder='Name' onChange={(e) => setNewsName(e.target.value)} />
                </Form.Group>
                <Form.Group className="new-input-email">
                    <Form.Control type='email' placeholder='Email' onChange={(e) => setNewsEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className='text-center'>
                    <Button className='news-btn text-center' type='submit'>Join List</Button>
                </Form.Group>
            </Form>
        </>
    );
}