import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Login from './login';
import Signup from './signup';
import Footer from './footer';
import Movies from './Movies';


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
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/movies' element={<Movies/>} />  
            <Route path='/movies/genre/action' element={<Movies />} />
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
