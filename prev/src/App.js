import React from 'react';
import ReactDom from 'react-dom/client'
import {BrowserRouter, Route} from 'react-router-dom'
import { Routes } from 'react-router-dom';
import Header from './header/header';
import Home from './homepage/home'
import Footer from './footer/footer';
import  Lognin from './login/login'
import Singnup from './signup/signup'
import Country from './country/country'
import Category from './category/category'
import Genre from './genre/genre'



function App() {
  return (
    <><Header /><Routes>
       <Route path='/' element={<Home />} />
       <Route path='/login' element={<Lognin/>}/>
       <Route path='/signup' element={<Singnup/>}/>
       <Route path='/country' element={<Country/>}/>
       <Route path='/category' element={<Category/>}/>
       <Route path='/genre' element={<Genre/>} />  
</Routes>
<Footer /></>
    
  );
}

export default App;
