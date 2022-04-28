import React, { useEffect, useState } from 'react'
import Footer from '../User_Componant/Footer'
import NavBar from '../User_Componant/NavBar'

import '../_css/style.min.css'
import '../_css/style.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Shop = () => {
    var navigate = useNavigate()
    // var id = useParams().categoryId;

    const [categoryList1, setcategoryList1] = useState([])
    const [categoryList2, setcategoryList2] = useState([])
    const [categoryList3, setcategoryList3] = useState([])
    const [categoryList4, setcategoryList4] = useState([])
    const [categoryList5, setcategoryList5] = useState([])
    const [categoryList6, setcategoryList6] = useState([])
    // const [categoryList7, setcategoryList] = useState([])
    const getData = async () => {
        await axios.get(`http://localhost:4001/categorys/6253fb7b81df77140228c5d0`).then((res) => {
            console.log(res.data.data);
            setcategoryList1(res.data.data);
        });
    };
    const data1 = async () => {
        await axios.get(`http://localhost:4001/categorys/6253fb7b81df77140228c5d0`).then((res) => {
            navigate("/Ring");
            localStorage.setItem("category", res.data.data.categoryName);
        })
    }
    const getData2 = async () => {
        await axios.get(`http://localhost:4001/categorys/6254049f16f0da6b35154651`).then((res) => {
            console.log(res.data.data);
            setcategoryList2(res.data.data);
        });
    };
    const data2 = async () => {
        await axios.get(`http://localhost:4001/categorys/6254049f16f0da6b35154651`).then((res) => {
            navigate("/Chain");
        })
    }
    const getData3 = async () => {
        await axios.get(`http://localhost:4001/categorys/6254055016f0da6b35154653`).then((res) => {
            console.log(res.data.data);
            setcategoryList3(res.data.data);
        });
    };
    const data3 = async () => {
        await axios.get(`http://localhost:4001/categorys/6254055016f0da6b35154653`).then((res) => {
            navigate("/Bracelet");
        })
    }
    const getData4 = async () => {
        await axios.get(`http://localhost:4001/categorys/6254058116f0da6b35154655`).then((res) => {
            console.log(res.data.data);
            setcategoryList4(res.data.data);
        });
    };
    const data4 = async () => {
        await axios.get(`http://localhost:4001/categorys/6254058116f0da6b35154655`).then((res) => {
            navigate("/Necklace");
        })
    }
    const getData5 = async () => {
        await axios.get(`http://localhost:4001/categorys/625405b016f0da6b35154658`).then((res) => {
            console.log(res.data.data);
            setcategoryList5(res.data.data);
        });
    };
    const data5 = async () => {
        await axios.get(`http://localhost:4001/categorys/625405b016f0da6b35154658`).then((res) => {
            navigate("/HandChain");
        })
    }
    const getData6 = async () => {
        await axios.get(`http://localhost:4001/categorys/6254060a16f0da6b3515465a`).then((res) => {
            console.log(res.data.data);
            setcategoryList6(res.data.data);
        });
    };
    const data6 = async () => {
        await axios.get(`http://localhost:4001/categorys/6254060a16f0da6b3515465a`).then((res) => {
            navigate("/Diamond");
        })
    }
    useEffect(() => {
        getData();
        getData2();
        getData3();
        getData4();
        getData5();
        getData6();
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
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-1" style={{ position: 'relative', left: '180px' }}  >
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            </div>
                            <img className="img-fluid w-100" src={categoryList1.img} alt="Error" />
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{categoryList1.categoryName}</h6>
                                <div className="d-flex justify-content-center">
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <button to="" onClick={data1} className="text-center btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>More Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-1" style={{ position: 'relative', left: '180px' }}  >
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            </div>
                            <img className="img-fluid w-100" src={categoryList2.img} alt="Error" />
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{categoryList2.categoryName}</h6>
                                <div className="d-flex justify-content-center">
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <button to="" onClick={data2} className="text-center btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>More Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-1" style={{ position: 'relative', left: '180px' }}  >
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            </div>
                            <img className="img-fluid w-100" src={categoryList3.img} alt="Error" />
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{categoryList3.categoryName}</h6>
                                <div className="d-flex justify-content-center">
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <button to="" onClick={data3} className="text-center btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>More Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-1" style={{ position: 'relative', left: '180px' }}  >
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            </div>
                            <img className="img-fluid w-100" src={categoryList4.img} alt="Error" />
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{categoryList4.categoryName}</h6>
                                <div className="d-flex justify-content-center">
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <button to="" onClick={data4} className="text-center btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>More Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-1" style={{ position: 'relative', left: '180px' }}  >
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            </div>
                            <img className="img-fluid w-100" src={categoryList5.img} alt="Error" />
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{categoryList5.categoryName}</h6>
                                <div className="d-flex justify-content-center">
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <button to="" onClick={data5} className="text-center btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>More Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-1" style={{ position: 'relative', left: '180px' }}  >
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            </div>
                            <img className="img-fluid w-100" src={categoryList6.img} alt="Error" />
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{categoryList6.categoryName}</h6>
                                <div className="d-flex justify-content-center">
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <button to="" onClick={data6} className="text-center btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>More Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shop