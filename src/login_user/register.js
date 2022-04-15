import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './css/main.css';
import './css/util.css';

const Register = () => {


    const [userName, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    // const [mobileNum, setmobailNum] = useState('');
    // const [gender, setgender] = useState('');
    // const [isActive, setisActive] = useState('');



    var Data = {
        userName: userName,
        email: email,
        password: password,
        role: '6220d6c79030e863cdb5ddc2'
        // mobileNum: mobileNum,
        // gender: gender,
        // isActive: isActive,
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4001/users', Data).then(res => {
            alert('Register Successfull')
        })
    }

    return (
        <>
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <form class="login100-form validate-form" onSubmit={submit} >
                            <span class="login100-form-title p-b-26">
                                Welcome
                            </span>
                            <span class="login100-form-title p-b-48">
                                Jewellery Shop
                            </span>

                            <div class="wrap-input100 validate-input" data-validate="Valid username is: a@b.c">
                                <input class="input100" type="text" name="username" onChange={(e) => setusername(e.target.value)} />
                                <span class="focus-input100" data-placeholder="username"></span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <input class="input100" type="text" name="email" onChange={(e) => setemail(e.target.value)} />
                                <span class="focus-input100" data-placeholder="Email"></span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Enter password">
                                <span class="btn-show-pass">
                                    <i class="zmdi zmdi-eye"></i>
                                </span>
                                <input class="input100" type="password" name="pass" onChange={(e) => setpassword(e.target.value)} />
                                <span class="focus-input100" data-placeholder="Password"></span>
                            </div>

                            <div class="container-login100-form-btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <button class="login100-form-btn">
                                        Register
                                    </button>
                                </div>
                            </div>

                            <div class="text-center p-t-115">
                                <span class="txt1">
                                    You have an account?
                                </span>

                                <a class="txt2" href="/login">
                                    login
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div id="dropDownSelect1"></div>
        </>
    )
}


export default Register