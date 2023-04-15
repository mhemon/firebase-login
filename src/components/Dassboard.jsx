import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-toastify';

const Dassboard = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const user = location.state
    console.log(user)
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth)
        .then(result => {
            toast.success('Logout!!',{autoClose: 3000})
            navigate('/')
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    return (
        <div className='container card w-25 mx-auto mt-5 p-2'>
            <figure className="figure">
                <img src={user.photo} className="figure-img img-fluid rounded" alt="..."/>
            </figure>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
        </div>
    );
};

export default Dassboard;