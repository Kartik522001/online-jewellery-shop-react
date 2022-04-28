import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/main.css';
import './css/util.css';
// import useHistory from 'use-history';

const Login = ({ setLoginUser }) => {

    // const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    var navigate = useNavigate()

    const emailChangeHandler = (e) => {
        setemail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setpassword(e.target.value)
    }

    const submit = async (e) => {
        e.preventDefault();

        var loginData = {
            email: email,
            password: password
        }

        await axios.post(`http://localhost:4001/login`, loginData).then(res => {
            if (res.data.status === 200) {
                console.log("axios post called", res.data.data);

                console.log("email", res.data.data.email);
                console.log("roleName", res.data.data.role.roleName);
                console.log("roleId", res.data.data.role._id);

                localStorage.setItem("email", res.data.data.email);
                localStorage.setItem("roleName", res.data.data.role.roleName);
                localStorage.setItem("roleId", res.data.data.role._id)

                if (res.data.data.role._id === "62301d5dee1b25e47af7e8cc") {
                    navigate("/admin/*");
                }

                else if (res.data.data.role._id === "6220d6c79030e863cdb5ddc2") {
                    navigate("/")
                }

            } else {
                console.log("Invalid credentials", res.data.data);
                alert("Invalid Credentials");
            }

            // history.push('/');
        }).catch((err) => {
            alert('Invalid Credentials')
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

                            <div class="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <input class="input100" type="text" name="email" onChange={emailChangeHandler} />
                                <span class="focus-input100" data-placeholder="Email"></span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Enter password">
                                <span class="btn-show-pass">
                                    <i class="zmdi zmdi-eye"></i>
                                </span>
                                <input class="input100" type="password" name="pass" onChange={passwordChangeHandler} />
                                <span class="focus-input100" data-placeholder="Password" ></span>
                            </div>

                            <div class="container-login100-form-btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <button class="login100-form-btn">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div class="text-center p-t-115">
                                <span class="txt1">
                                    Don’t have an account?
                                </span>

                                <a class="txt2" href="/register">
                                    Sign Up
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

export default Login