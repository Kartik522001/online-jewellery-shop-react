import React, { useEffect, useState } from 'react'
import Footer from '../User_Componant/Footer'
import NavBar from '../User_Componant/NavBar'

import '../_css/style.min.css'
import '../_css/style.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Details = () => {
    var id = useParams().productId;
    const [productList, setproductList] = useState([]);

    const getData = async (_id) => {
        await axios.get(`http://localhost:4001/productslist/${id}`).then((res) => {
            console.log(res.data.data);
            setproductList(res.data.data);
        });
    };

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <NavBar />
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Detail</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><Link to="/">Home</Link></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shop Detail</p>
                    </div>
                </div>
            </div>
            {/* {productList.join((product) => {
                return (
                    <> */}
            <div className="container-fluid py-5">
                <div className="row px-xl-5">

                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner border">
                                <div className="carousel-item active">
                                    <img className="w-100 h-100" src={productList.img} alt="" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src={productList.img} alt="" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src={productList.img} alt="" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src="img/product-4.jpg" alt="" />
                                </div>
                            </div>
                            <Link className="carousel-control-prev" to="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </Link>
                            <Link className="carousel-control-next" to="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <h3 className="font-weight-semi-bold">{productList.productName}</h3>
                        <div className="d-flex mb-3">
                            <div className="text-primary mr-2">
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star-half-alt"></small>
                                <small className="far fa-star"></small>
                            </div>
                            <small className="pt-1">(50 Reviews)</small>
                        </div>
                        <h3 className="font-weight-semi-bold mb-4">${productList.baseprice}</h3>
                        {/* <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p> */}
                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-minus" >
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-secondary text-center" value="1" />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-plus">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                        </div>
                        <div className="d-flex pt-2">
                            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                            <div className="d-inline-flex">
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
                                    <i className="fab fa-pinterest"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* </>
                )
            })} */}
            <Footer />
        </>

    )
}

export default Details