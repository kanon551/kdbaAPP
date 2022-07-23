import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react'
import Login from './pages/Login';
import KdbaMembers from './pages/KdbaMembers';
import AdvocateProfile from './pages/AdvocateProfile';

const App = () => {
  return (
    <div>
      <Router>
                <Routes>
                  {/* <Route element={<ProtectedRoutes />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/products/:category" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductItem />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/pay' element={<Pay/>}/>
                        <Route path='/sucess' element={<Sucess/>}/>
                  </Route> */}
                  <Route path='/' element={<Login/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/kdba_members' element={<KdbaMembers/>}/>
                  <Route path='/advocate_Profile' element={<AdvocateProfile/>}/>
                  {/* <Route path='/register' element={<Register/>}/> */}
                </Routes>
              </Router>
    </div>
  )
}

export default App
