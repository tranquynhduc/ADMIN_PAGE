import React from 'react'
import NavbarAdmin from './NavbarAdmin'
import Dashboard from './container/Dashboard';
import './style/Home.css';
import { Link } from 'react-router-dom';
import NewUser from './container/User/NewUser';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './container/prooduct/AddProduct';
import About from './container/About';
import UserList from './container/User/UserList';
import EditUser from './container/User/EditUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
    return (
        <div>
            <NavbarAdmin />
            <ToastContainer/>
            <div className='container'>
                <Dashboard />
                <div className='other'>
                    <Routes>
                        <Route path='/UserList' element={<UserList />} />
                        <Route path='/NewUser' element={<NewUser />} />
                        <Route path='/EditUser/:id' element={<EditUser />} />
                        <Route path='/Addproduct' element={<AddProduct />} />
                        <Route path='/About' element={<About />} />
                    </Routes>
                </div>

            </div>
        </div>
    )
}

export default Home