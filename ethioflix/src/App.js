import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './header/header';
import Home from './homepage/home'
import Footer from './footer/footer';
import Lognin from './login/login'
import Singnup from './signup/signup'
import Country from './country/country'
import Category from './category/category'
import Genre from './genre/genre'



function App() {
  return (
    <Router>
      <div>
        <div>
          <Header />
        </div>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Lognin/>}/>
            <Route path='/signup' element={<Singnup/>}/>
            <Route path='/country' element={<Country/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/genre' element={<Genre/>} />  
            <Route path='/action' element={<Genre />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
