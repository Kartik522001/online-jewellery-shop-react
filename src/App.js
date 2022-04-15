import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Admin_Componant/Dashboard";
import { VendorDashbord, } from "./Vendor_Componant/VendorDashbord";
import Login from "./login_user/login";
// import { Login1 } from "./Login/Login";
import Register from "./login_user/register";
// import { AdminLockScreen } from "./Login/AdminLockScreen";
import Home from './User_Componant/Home';
import Contact from './Pages/Contant';
import Shop from './Pages/Shop';
import Details from './Pages/Details';
import Cart from './Pages/cart'
import Checkout from './Pages/checkout'
import ShopDetail from './Pages/ShopDetails'
import { useEffect, useState } from "react";

function App() {
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);

        setTimeout(() => {
            setisLoading(false)
        }, 200);
        return () => {

        }
    }, [])
    return (
        <div className="wrapper">
            {/* <AddProduct /> */}
            <Routes>
                {/* <Route path="/admin" element={<AdminLockScreen />}></Route> */}
                <Route path="/admin/*" element={<Dashboard />}></Route>
                <Route path='/VendorDashbord/*' element={<VendorDashbord />}></Route>
                <Route path='/login' element={<Login />}></Route>
                {/* <Route path='/admin/login' element={<Login1 />}></Route> */}
                <Route path="/register" element={<Register />}></Route>
                <Route path='/' element={<Home />}></Route>
                <Route path='/content' element={<Contact />}></Route>
                <Route path='/shop' element={<Shop />}></Route>
                <Route path='/detail/:productId' element={<Details />}></Route>
                <Route path='/shopDetail/:categoryId' element={<ShopDetail />} />
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/checkout' element={<Checkout />}> </Route>
            </Routes>

        </div>
    );
}

export default App;
