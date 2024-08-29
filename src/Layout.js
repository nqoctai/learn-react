import {
    BrowserRouter,
    Routes, Route
} from "react-router-dom";
import User from './component/User/User';
import Admin from './component/Admin/Admin';
import HomePage from './component/Home/HomePage';
import ManageUser from './component/Admin/Content/ManageUser';
import Dashboard from './component/Admin/Content/DashBoard';
import Login from './component/Auth/Login';
import App from './App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./component/Auth/Register";
const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomePage></HomePage>} />
                    <Route path="users" element={<User></User>} />

                </Route>
                <Route path="/admins" element={<Admin />} >
                    <Route index element={<Dashboard />} />

                    <Route path="manage-users" element={<ManageUser />} />
                </Route>

                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout;