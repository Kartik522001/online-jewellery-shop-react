
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import '../_css/style.min.css'
import '../_css/style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
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
            <br />
            <br />
            <br />
            <div class="text-center mb-4">
                <h2 class="section-title px-5"><span class="px-2">Category</span></h2>
            </div>
            <div className="col-lg-9 col-md-12">
                <div className="row pb-3">
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
            <br />
            <br />
            <br />
            <div class="text-center mb-4">
                <h2 class="section-title px-5"><span class="px-2">Product</span></h2>
            </div>
            <Footer />

        </>
    )
}

export default Home