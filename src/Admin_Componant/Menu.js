import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div>
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <Link to="index3.html" className="brand-link">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">Online Jewellery Shop</span>
                    </Link>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> */}
                            </div>
                            <div className="info">
                                <Link to="/" className="d-block">Panchal Kartik</Link>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
                                <li className="nav-item has-treeview menu-open">
                                    <Link to="/dashbord2" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/getrole" class="nav-link active">
                                        <i class="nav-icon fas fa-th"></i>
                                        <p>
                                            ROLE
                                        </p>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/vendorrequest" class="nav-link active">
                                        <i class="nav-icon fas fa-th"></i>
                                        <p>
                                            Vendor Requests
                                            <span class="right badge badge-danger">New</span>
                                        </p>
                                    </Link>
                                </li>


                                <li className="nav-header">ADD DATA</li>

                                <li className="nav-item has-treeview">
                                    <Link to="/dashbord" className="nav-link">
                                        <i className="nav-icon far fa-envelope" />
                                        <p>
                                            Role
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/dashbord/user" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>User</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/getvendor" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Vendor</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <Link to="/dashbord" className="nav-link">
                                        <i className="nav-icon far fa-envelope" />
                                        <p>
                                            ADD
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/addvendor" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Vendor</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/addproduct" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Product</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/addcategories" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Category</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/addsubcategory" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Sub-Category</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/addbrand" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Brand</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/addvendor" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>City</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/addvendor" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>State</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/addvendor" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Order</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/addvendor" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Offer</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <Link to="/productlist" className="nav-link">
                                        <i className="nav-icon fas fa-book" />
                                        <p>
                                            Product
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/productlist' className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Product List</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <Link to="/categorylist" className="nav-link">
                                        <i className="nav-icon fas fa-book" />
                                        <p>
                                            Category
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/categorylist' className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Category List</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <Link to="/getsubcategory" className="nav-link">
                                        <i className="nav-icon fas fa-book" />
                                        <p>
                                            Sub-Category
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/getsubcategory' className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Sub-Category List</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <Link to="/getbrand" className="nav-link">
                                        <i className="nav-icon fas fa-book" />
                                        <p>
                                            Brand
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to='/getbrand' className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Brand List</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <Link to="/" className="nav-link">
                                        <i className="nav-icon far fa-plus-square" />
                                        <p>
                                            Extras
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="pages/examples/login.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Login</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="pages/examples/register.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Register</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="pages/examples/forgot-password.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Forgot Password</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="pages/examples/recover-password.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Recover Password</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="pages/examples/lockscreen.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Lockscreen</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="pages/examples/legacy-user-menu.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Legacy User Menu</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="pages/examples/language-menu.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Language Menu</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="pages/examples/404.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Error 404</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="pages/examples/500.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Error 500</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="pages/examples/pace.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Pace</p>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="starter.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Starter Page</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>



                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
            </div>

        )
    }
}
