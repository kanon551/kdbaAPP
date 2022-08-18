import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'
import Login from './pages/Login';
import KdbaPage from './pages/KdbaPage';
import ManipulateMembers from './components/ManipulateMembers';

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
                  <Route path='/' element={<KdbaPage/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/profile' element={<ManipulateMembers/>}/>
                </Routes>
              </Router>
    </div>
  )
}

export default App
