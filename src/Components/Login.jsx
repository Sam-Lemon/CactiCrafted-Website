import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login () {

    return(
        <Form>
            <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter Email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Keep me logged in.'/>
            </Form.Group>

            <Button variant="success" type="submit">
                Log In
            </Button>
        </Form>
    );
}

export default Login;
