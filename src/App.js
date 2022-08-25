import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'
import Home from './pages/Home';
import History from './pages/History';
import Magistrate from './pages/Magistrate';
import Advocates from './pages/Advocates';
import AdvocateGrid from './pages/AdvocateGrid';
import AdvocateProfile from './pages/AdvocateProfile';
import ProtectedRoutes from './components/ProtectedRoutes';
import Incumbency from './pages/Incumbency';

const App = () => {
  return (
    <div>
      <Router>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/history' element={<History/>}/>
                  <Route path='/judges' element={<Magistrate/>}/>
                  <Route path='/advocates' element={<Advocates/>}/>
                  <Route path='/advocateGrid' element={<AdvocateGrid/>}/>
                  <Route path='/incumbancy' element={<Incumbency/>}/>
                  <Route element={<ProtectedRoutes />}>
                      <Route path='/advocateProfile' element={<AdvocateProfile/>}/>
                  </Route>
                </Routes>
              </Router>
    </div>
  )
}

export default App
