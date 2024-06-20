import Form from 'react-bootstrap/Form';

export function Register () {

    return(
        <Form>

            
            <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Email' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formGroupPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='email' placeholder='Create a Password' />
            </Form.Group>
        </Form>
    );
}