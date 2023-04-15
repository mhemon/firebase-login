import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const SignIn = () => {
  const auth = getAuth()
  const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        // perform login logic here
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        //firebase signin 
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
          const loggedInUser = result.user
          const isEmailVerified = loggedInUser?.emailVerified
          if(isEmailVerified){
            const user = {name: loggedInUser?.displayName, email: loggedInUser?.email, photo: loggedInUser?.photoURL}
            //send user to dassboard
            navigate('/dassboard',{state: user})
          }else{
            toast.error('please verify your email first!')
            return
          }
        })
        .catch(error => {
          toast.error(error.message)
        })
      };

    return (
        <div className="container w-25 mx-auto card p-2 mt-5">
        <h1>Login Page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
  
          <Button className="mt-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="mt-2 mb-0"><small>New here? <Link to='/register'>Register</Link></small></p>
        <p className="my-1"><small>Forgot password? <Link to='/reset'>Reset</Link></small></p>
        <SocialLogin/>
      </div>
    );
};

export default SignIn;