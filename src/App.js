import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Nopage from "./pages/nopage/Nopage";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from './context/data/MyState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <MyState>
      <Router>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/productInfo/:id' element={<ProductInfo/>} />
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/updateproduct' element={<UpdateProduct/>}/>
        <Route path="/*" element={<Nopage/>} />
      </Routes>
      </Router>
      </MyState>
    
  )
}

export default App