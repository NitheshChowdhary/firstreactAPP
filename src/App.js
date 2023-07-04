import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Appheader from './Appheader';
import Home from './Home';
import Contact from './Contact';
import Customer from './Customer';
import Error from './Error';
import React from 'react';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
function App() {
  return (
    <div className="App">
      <h1> Welcome Nithesh </h1>
      <BrowserRouter>
      <Appheader></Appheader>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='addcustomer' element={<AddCustomer/>}></Route>
        <Route path='editcustomer' element={<EditCustomer/>}></Route>
        <Route path='customer' element={<Customer/>}></Route>
        <Route path='customer/:code' element={<Customer/>}></Route>
        <Route path='customer/:name/:code' element={<Customer/>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      
      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  
  );
}

export default App;
