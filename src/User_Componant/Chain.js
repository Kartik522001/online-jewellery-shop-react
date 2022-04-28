
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import '../_css/style.min.css'
import '../_css/style.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Chain = () => {
    const [productList1, setproductList1] = useState([]);
    const [productList2, setproductList2] = useState([]);
    const [productList3, setproductList3] = useState([]);

    const getData = async () => {
        await axios.get(`http://localhost:4001/productslist/625e9f941e55c44683917b0d`).then((res) => {
            console.log(res.data.data);
            setproductList1(res.data.data);
        });
    };
    const getData1 = async () => {
        await axios.get(`http://localhost:4001/productslist/625ea07b1e55c44683917b1a`).then((res) => {
            console.log(res.data.data);
            setproductList2(res.data.data);
        });
    };
    const getData2 = async () => {
        await axios.get(`http://localhost:4001/productslist/625ea10d1e55c44683917b20`).then((res) => {
            console.log(res.data.data);
            setproductList3(res.data.data);
        });
    };

    useEffect(() => {
        getData();
        getData2();
        getData1();
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
            {/* {productList.map((product) => {
                        return (
                            <> */}
            <div className="col-lg-9 col-md-12" style={{ position: 'relative', left: '180px' }}>
                <div className="row pb-3">
                    <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                        <div class="card product-item border-0 mb-4">
                            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img class="img-fluid w-100" src={productList1.img} alt="Error" />
                            </div>
                            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 class="text-truncate mb-3">{productList1.productName}</h6>
                                <div class="d-flex justify-content-center">
                                    <h6>${productList1.baseprice}</h6><h6 class="text-muted ml-2"></h6>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between bg-light border">
                                <Link to={`/detail/625e9f941e55c44683917b0d`} class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                <Link to="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                        <div class="card product-item border-0 mb-4">
                            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img class="img-fluid w-100" src={productList2.img} alt="Error" />
                            </div>
                            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 class="text-truncate mb-3">{productList2.productName}</h6>
                                <div class="d-flex justify-content-center">
                                    <h6>${productList2.baseprice}</h6><h6 class="text-muted ml-2"></h6>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between bg-light border">
                                <Link to={`/detail/625ea07b1e55c44683917b1a`} class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                <Link to="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                        <div class="card product-item border-0 mb-4">
                            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img class="img-fluid w-100" src={productList3.img} alt="Error" />
                            </div>
                            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 class="text-truncate mb-3">{productList3.productName}</h6>
                                <div class="d-flex justify-content-center">
                                    <h6>${productList3.baseprice}</h6><h6 class="text-muted ml-2"></h6>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between bg-light border">
                                <Link to={`/detail/625ea10d1e55c44683917b20`} class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                <Link to="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</Link>
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
export default Chain
