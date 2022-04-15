import React, { useEffect, useState } from 'react'
import Footer from '../User_Componant/Footer'
import NavBar from '../User_Componant/NavBar'

import '../_css/style.min.css'
import '../_css/style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Shop = () => {
    const [categoryList, setcategoryList] = useState([])
    const getData = async () => {
        await axios.get("http://localhost:4001/categorys").then((res) => {
            console.log(res.data.data);
            setcategoryList(res.data.data);
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
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" style={{ position: 'relative', left: '50px' }} className="form-control" placeholder="Search by name" />
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary">
                                            <i style={{ position: 'relative', left: '50px' }} className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div className="dropdown ml-4">
                                <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Sort by
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                    <Link className="dropdown-item" to="#">Latest</Link>
                                    <Link className="dropdown-item" to="#">Popularity</Link>
                                    <Link className="dropdown-item" to="#">Best Rating</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {categoryList.map((category) => {
                        return (
                            <>
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-1" style={{ position: 'relative', left: '180px' }}  >
                                    <div className="card product-item border-0 mb-4">
                                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">

                                        </div>


                                        <img className="img-fluid w-100" src={category.img} alt="Error" />
                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                            <h6 className="text-truncate mb-3">{category.categoryName}</h6>
                                            <div className="d-flex justify-content-center">
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between bg-light border">
                                            <Link to={`/shopDetail/${category._id}`} className="text-center btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>More Product</Link>

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

export default Shop