import React, { useEffect, useState } from 'react'
import Footer from '../User_Componant/Footer'
import NavBar from '../User_Componant/NavBar'
import '../_css/style.min.css'
import '../_css/style.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const Cart = () => {
    // var id = useParams().userId;
    var id = localStorage.getItem('userId')
    // console.log("Id--", id);
    var total = 0;
    var baseprice;
    var [cartList, setcart] = useState([]);

    // const total = cartList.reduce((total, item) => total + item.baseprice)

    const getData = () => {
        axios.get(`http://localhost:4001/cartone/${id}`).then((res) => {
            // console.log(res.data.data);
            setcart(res.data.data);
        });
    };


    cartList.map((car) => {
        baseprice = car.baseprice
        total = baseprice + total
    })


    useEffect(() => {
        getData();
    })
    return (
        <>
            <NavBar />
            <div class="container-fluid bg-secondary mb-5">
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
                    <div class="d-inline-flex">
                        <p class="m-0"><a href="/">Home</a></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Shopping Cart</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    <div class="col-lg-8 table-responsive mb-5">
                        <table class="table table-bordered text-center mb-0">
                            <thead class="bg-secondary text-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody class="align-middle">
                                {cartList.map((cart1) => {
                                    return (
                                        <>
                                            <tr>
                                                <td class="align-middle"><img src="img/product-1.jpg" alt="" style={{ width: "50px" }} /> {cart1.productName}</td>
                                                <td class="align-middle">${cart1.baseprice}</td>

                                                <td class="align-middle">${cart1.baseprice}</td>
                                            </tr>

                                        </>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-4">
                        <form class="mb-5" action="">
                            <div class="input-group">
                                <input type="text" class="form-control p-4" placeholder="Coupon Code" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <div class="card border-secondary mb-5">
                            <div class="card-header bg-secondary border-0">
                                <h4 class="font-weight-semi-bold m-0">Cart Summary</h4>
                            </div>
                            {/* {cartList.map((cart1) => {
                                return (
                                    <> */}

                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-3 pt-1">
                                    <h6 class="font-weight-medium">Subtotal</h6>
                                    {/* {cartList.map((cart1) => {
                                        return (

                                            <> */}
                                    <tr>
                                        <td class="align-middle">${total}</td>
                                    </tr>
                                    {/* </>
                                        )
                                    })} */}
                                </div>

                            </div>
                            <div class="card-footer border-secondary bg-transparent">
                                <div class="d-flex justify-content-between mt-2">
                                    <h5 class="font-weight-bold">Total</h5>
                                    <h5 class="font-weight-bold">${total}</h5>
                                </div>
                                <Link to={`/checkout/`} class="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</Link>
                            </div>
                            {/* </>
                                )
                            })} */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart