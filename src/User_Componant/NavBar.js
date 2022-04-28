import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import '../_css/style.min.css'
import '../_css/style.css'
import { useDispatch } from 'react-redux';

const NavBar = () => {

    var [email, setemail] = useState('')

    const getlocalStorageData = async () => {
        var email = localStorage.getItem("email")
        email = email;
        // alert(email)
    }



    useEffect(() => {
        setemail(localStorage.getItem("email"))
        getlocalStorageData()
    })

    return (
        <>

            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center">
                            <Link className="text-dark" to="">FAQs</Link>
                            <span className="text-muted px-2">|</span>
                            <Link className="text-dark" to="">Help</Link>
                            <span className="text-muted px-2">|</span>
                            <Link className="text-dark" to="">Support</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <Link className="text-dark px-2" to="">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="text-dark px-2" to="">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="text-dark px-2" to="">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link className="text-dark px-2" to="">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link className="text-dark pl-2" to="">
                                <i className="fab fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link to="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Jewellery</span>Shop</h1>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" style={{ position: 'relative', left: '50px' }} className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i style={{ position: 'relative', left: '50px' }} className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <Link to="" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge">0</span>
                        </Link>
                        <Link to="" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className="badge">0</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" to="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                            <h6 className="m-0">Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </Link>
                        <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                            <div className="navbar-nav w-100 overflow-hidden" style={{ height: "410px" }}>
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></Link>
                                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <Link to="" className="dropdown-item">Men's Dresses</Link>
                                        <Link to="" className="dropdown-item">Women's Dresses</Link>
                                        <Link to="" className="dropdown-item">Baby's Dresses</Link>
                                    </div>
                                </div>
                                <Link to="" className="nav-item nav-link">Shirts</Link>
                                <Link to="" className="nav-item nav-link">Jeans</Link>
                                <Link to="" className="nav-item nav-link">Swimwear</Link>
                                <Link to="" className="nav-item nav-link">Sleepwear</Link>
                                <Link to="" className="nav-item nav-link">Sportswear</Link>
                                <Link to="" className="nav-item nav-link">Jumpsuits</Link>
                                <Link to="" className="nav-item nav-link">Blazers</Link>
                                <Link to="" className="nav-item nav-link">Jackets</Link>
                                <Link to="" className="nav-item nav-link">Shoes</Link>
                            </div>
                        </nav>
                    </div> */}
            <div className="col-lg-9" style={{ position: 'relative', left: '190px' }} >
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <Link to="" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Jewellery</span>Shop</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0"  >
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/shop" className="nav-item nav-link">Shop</Link>
                            {/* <Link to="detail.html" className="nav-item nav-link">Shop Detail</Link> */}
                            {/* <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <Link to="cart.html" className="dropdown-item">Shopping Cart</Link>
                                    <Link to="checkout.html" className="dropdown-item">Checkout</Link>
                                </div>
                            </div> */}
                            <Link to="/content" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="navbar-nav ml-auto py-0">
                            <Link to="/logout" className="nav-item nav-link">Logout</Link>
                            <Link to="/login" className="nav-item nav-link">{email ? <span className="text-dark"> {email} </span> : <span> login </span>}</Link>
                            <Link to="/register" className="nav-item nav-link">Register</Link>
                        </div>
                    </div>
                </nav>
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{ height: "410px;" }}>
                            {/* <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" /> */}
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "700px;" }}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                    <Link to="" className="btn btn-light py-2 px-3">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ height: "410px;" }}>
                            {/* <img className="img-fluid" src="img/carousel-2.jpg" alt="Image"></img> */}
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "700px;" }}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                    <Link to="" className="btn btn-light py-2 px-3">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Link className="carousel-control-prev" to="#header-carousel" data-slide="prev">
                        <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </Link>
                    <Link className="carousel-control-next" to="#header-carousel" data-slide="next">
                        <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </Link> */}
                </div>
            </div>
        </>
    )
}

export default NavBar