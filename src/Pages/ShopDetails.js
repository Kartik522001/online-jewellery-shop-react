import React, { useEffect, useState } from 'react'
import Footer from '../User_Componant/Footer'
import NavBar from '../User_Componant/NavBar'

import '../_css/style.min.css'
import '../_css/style.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const ShopDetails = () => {
    var id = useParams().categoryId;
    console.log("Id--", id);
    const [productList, setproductList] = useState([]);

    const getData = async () => {
        await axios.get(`http://localhost:4001/products/${id}`).then((res) => {
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
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><Link to="/">Home</Link></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shop</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-9 col-md-12">
                <div className="row pb-3">
                    {productList.map((product) => {
                        return (
                            <>
                                <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                                    <div class="card product-item border-0 mb-4">
                                        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                            <img class="img-fluid w-100" src={product.img} alt="Error" />
                                        </div>
                                        <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                            <h6 class="text-truncate mb-3">{product.productName}</h6>
                                            <div class="d-flex justify-content-center">
                                                <h6>${product.baseprice}</h6><h6 class="text-muted ml-2"></h6>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex justify-content-between bg-light border">
                                            <Link to={`/detail/${product._id}`} class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                            <Link to="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShopDetails