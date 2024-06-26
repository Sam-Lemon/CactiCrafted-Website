import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function RegForm (props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
        <Form className='reg-form' onSubmit={handleSubmit}>
            <h3 className='text-center'>Register</h3>
            <Form.Group className='mb-3' controlId='formGroupFirstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='first-name' onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='last-name' onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <div className='text-center'>
                <Button className=' login-btn' type="submit">
                    Register
                </Button>
            </div>
            <div className='text-center'>
                <Button variant='link' onClick={(e) => props.onFormSwitch('login')}>
                    Have an account? Login here.
                </Button>

            </div>

        </Form>
    );
}




