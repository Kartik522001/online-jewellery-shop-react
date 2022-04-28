import React, { useState } from 'react'
import Footer from '../User_Componant/Footer'
import NavBar from '../User_Componant/NavBar'
import '../_css/style.min.css'
import '../_css/style.css'
import axios from 'axios'

const Contant = () => {
    const [Name, setName] = useState('')
    const [email, setemail] = useState('')
    const [Description, setDescription] = useState('')

    var Data = {
        Name: Name,
        email: email,
        Description: Description
    }

    const sendmessage = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:4001/content`, Data).then(res => {
            console.log(res.data);
            console.log("Axios called :", res.data.data);

            if (res.data.status === 200) {
                // alert(`Name : ${Name} \n Email : ${email}`)
                // toast.success(res.data.msg);
                alert('send Data');

            }

            else {
                alert("Message Send again.....")

                // toast.error(res.data.msg);
            }
        })

    }
    return (
        <>
            <NavBar />
            <div class="container-fluid bg-secondary mb-5">
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3">Contact Us</h1>
                    <div class="d-inline-flex">
                        <p class="m-0"><a href="/">Home</a></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Contact</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid pt-5">
                <div class="text-center mb-4">
                    <h2 class="section-title px-5"><span class="px-2">Contact For Any Queries</span></h2>
                </div>
                <div class="row px-xl-5">
                    <div class="col-lg-7 mb-5">
                        <div class="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" onSubmit={sendmessage} id="contactForm" novalidate="novalidate">
                                <div class="control-group">
                                    <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" id="name" placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" onChange={(e) => setemail(e.target.value)}
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea class="form-control" rows="6" id="message" placeholder="Message"
                                        onChange={(e) => setDescription(e.target.value)}
                                        required="required"
                                        data-validation-required-message="Please enter your message"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5 mb-5">
                        <h5 class="font-weight-semi-bold mb-3">Get In Touch</h5>
                        <p>I feel our biggest differentiator is not only the ability to understand local, think local and act local, but at the same time bring in our vast experience and sourcing strength out of operating in multiple markets.</p>
                        <div class="d-flex flex-column mb-3">
                            <h5 class="font-weight-semi-bold mb-3">Store 1</h5>
                            <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                            <p class="mb-2"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="font-weight-semi-bold mb-3">Store 2</h5>
                            <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                            <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contant