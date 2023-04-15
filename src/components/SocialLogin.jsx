import React, { useState } from 'react';
import google from '../assets/google.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import app from './Firebase/FirebaseConfig';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate()

    const handleGoogleBtn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user
            toast.success("user create success !",{autoClose: 3000});
            console.log(loggedInUser)
            const user = {name: loggedInUser?.displayName, email: loggedInUser?.email, photo: loggedInUser?.photoURL}
            //send user to dassboard
            navigate('/dassboard',{state: user})
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    const handleGithubBtn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedInUser = result.user
            toast.success("user create success !",{autoClose: 3000});
            console.log(loggedInUser)
            const user = {name: loggedInUser?.displayName, email: loggedInUser?.email, photo: loggedInUser?.photoURL}
            //send user to dassboard
            navigate('/dassboard',{state: user})
        })
        .catch(error => {
            toast.error(error.message);
        })
    }

    return (
        <div className='card p-2 mt-2'>
            <div className='d-flex justify-content-around'>
            <button onClick={handleGoogleBtn} className='btn btn-light'><img style={{width: '20px'}} src={google} alt="" /></button>
            <button onClick={handleGithubBtn} className='btn btn-light'><img style={{width: '20px'}} src={github} alt="" /></button>
            <button className='btn btn-light'><img style={{width: '20px'}} src={twitter} alt="" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;