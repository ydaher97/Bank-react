import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import UserDetails from './pages/UserPage/UserDetails';
import Transactions from './pages/TransactionPage/Transactions';
import Signup from './pages/signup/Signup';
import Nav from './components/Nav';
import Login from './pages/login/Login';


function App() {
  const user = localStorage.getItem('user');
  return (
    <>
    {user && <Nav/>}
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>

      {user && <Route>
          <Route path='/home' element={<HomePage/>}/>
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path='/transactions' element={<Transactions/>}/>
        </Route>
      }
      

    </Routes>
    </>
  )
}

export default App
