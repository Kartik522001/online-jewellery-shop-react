import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Admin_Componant/Dashboard";
import { Login } from "./Login/Login";
import { AdminLockScreen } from "./Login/AdminLockScreen";

function App() {
    return (
        <div className="wrapper">
            {/* <AddProduct /> */}
            <Routes>
                <Route path="/" element={<AdminLockScreen />}></Route>
                <Route path="/*" element={<Dashboard />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>

        </div>
    );
}

export default App;
