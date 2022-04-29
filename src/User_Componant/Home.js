
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import '../_css/style.min.css'
import '../_css/style.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

    // const [categoryList7, setcategoryList] = useState([])

    const [categoryList1, setcategoryList1] = useState([])
    const getData = async () => {
        await axios.get(`http://localhost:4001/categorys`).then((res) => {
            console.log(res.data.data);
            setcategoryList1(res.data.data);
        });
    };
    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        getData();

    }, [])
    var id = useParams().categoryId;
    console.log("Id--", id);
    const [productList, setproductList] = useState([]);

    const getData1 = async () => {
        await axios.get(`http://localhost:4001/products/${id}`).then((res) => {
            console.log(res.data.data);
            setproductList(res.data.data);
        });
    };

    useEffect(() => {
        getData1();
    }, [])
    return (
        <>
            <NavBar />
            <br />
            <br />
            <div class="text-center mb-4">
                <h2 class="section-title px-5"><span class="px-2">Category</span></h2>
            </div>
            <div className="col-lg-9 col-md-12">
                <div className="row pb-3">
                    {categoryList1.map((category) => {
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
                    {/* <div className="col-lg-4 col-md-6 col-sm-12 pb-1" style={{ position: 'relative', left: '180px' }}  >
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
                    </div> */}
                </div>
            </div>
            <br />
            <br />
            <br />

            <div class="text-center mb-4">
                <h2 class="section-title px-5"><span class="px-2">Product</span></h2>
            </div>
            {/* {productList.map((product) => {
                        return (
                            <> */}
            <div className="col-lg-9 col-md-12" style={{ position: 'relative', left: '180px' }}>
                <div className="row pb-3">
                    <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                        <div class="card product-item border-0 mb-4">
                            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img class="img-fluid w-100" src="data:image/jpeg;base64,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" alt="Error" />
                            </div>
                            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 class="text-truncate mb-3">Hard Ring</h6>
                                <div class="d-flex justify-content-center">
                                    <h6>$1200</h6><h6 class="text-muted ml-2"></h6>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between bg-light border">
                                <Link to={`/detail/62546438ac3b2caa532954a2`} class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                <Link to="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                        <div class="card product-item border-0 mb-4">
                            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img class="img-fluid w-100" src="data:image/jpeg;base64,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" alt="Error" />
                            </div>
                            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 class="text-truncate mb-3">Diamond Ring</h6>
                                <div class="d-flex justify-content-center">
                                    <h6>$1000</h6><h6 class="text-muted ml-2"></h6>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between bg-light border">
                                <Link to={`/detail/625d8dc4e58cba21ede441fb`} class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                <Link to="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                        <div class="card product-item border-0 mb-4">
                            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img class="img-fluid w-100" src="data:image/jpeg;base64,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" alt="Error" />
                            </div>
                            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 class="text-truncate mb-3">Simple Ring</h6>
                                <div class="d-flex justify-content-center">
                                    <h6>$500</h6><h6 class="text-muted ml-2"></h6>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between bg-light border">
                                <Link to={`/detail/625d8f3616722bf5556cc28a`} class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</Link>
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

export default Home