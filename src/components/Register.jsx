import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";


const Register = () => {

  const navigate = useNavigate()
  const auth = getAuth();

  const handleSubmit = (e) => {
      e.preventDefault();
      // perform login logic here
      const form = e.target
      const displayName = form.name.value
      const email = form.email.value
      const password = form.password.value
      console.log(displayName,email,password)

      if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/).test(password)){
        toast.error('Password must contain digit , upper case, lowercase');
        return
      }

      if(password.length < 6){
        toast.error('password must contain 6 char');
        return
      }

      // create user with firebase
      createUserWithEmailAndPassword(auth,email,password)
      .then(result => {
        const loggedInUser = result.user
        //update profile from user input
        updateProfile(auth.currentUser, {displayName: displayName, photoURL: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000'})
        .then(() => {
          // const user = {name: loggedInUser?.displayName, email: loggedInUser?.email, photo: loggedInUser?.photoURL}
          //send user to dassboard
          // navigate('/dassboard',{state: user})
          // send verification email
          sendEmailVerification(auth.currentUser)
          .then(() => {
            toast.success('Please check your email to verify!',{autoClose: 2000})
            return
          })
        })
        .catch(error => {
          toast.error(error.message);
        })
        
      })
      .catch(error => {
        toast.error(error.message);
      })
    };
    return (
        <div className="container w-25 mx-auto card p-2 mt-5">
        <h1>Register Page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
  
          <Button className="mt-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="my-2"><small>Already have account? <Link to='/'>Login</Link></small></p>
        <div>
        <SocialLogin/>
        </div>
      </div>
    );
};

export default Register;