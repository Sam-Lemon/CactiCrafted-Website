/** NOTES
 * 
 * email and password fields don't clear out correctly after submit
 * 
 * 
 * 
 * 
 * 
 * 
*/
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function LoginForm (props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);

        //Resets email and password field after submission.
        setEmail("");
        setPassword("");

    };

    return(
        <Form className='login-form' onSubmit={handleSubmit}>
            <h3 className='form-header'>Login</h3>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Keep me logged in.'/>
            </Form.Group>

            <Button variant="success" type="submit">
                Log In
            </Button>

            <Button variant='link'>
                Don't have an account? Register here.
            </Button>
        </Form>
    );
}
