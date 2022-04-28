import React from 'react'
import { useNavigate } from 'react-router';

const LogOut = () => {

    var navigate = useNavigate();

    localStorage.clear()

    setTimeout(() => {
        navigate('/')
        // alert('Logout success')
    }, 1000);



    return (
        <div>

            <h1 className="text-center font-weight-semi-bold text-uppercase mb-3">Logout SuccessFully.....</h1>

        </div>
    )
}

export default LogOut