import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
    const auth = getAuth();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        sendPasswordResetEmail(auth,email)
        .then(() => {
            toast.success('Password reset email sent!',{autoClose: 3000})
            navigate('/')
        })
        .catch(error => {
            toast.error(error.message)
        })
    }
    return (
        <div className="container w-25 mx-auto card p-2 mt-5">
            <h3>Reset your password</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                required
                />
            </Form.Group>
            <Button className="mt-4 w-100" variant="btn btn-danger" type="submit">
            Reset
          </Button>
            </Form>
        </div>
    );
};

export default Reset;