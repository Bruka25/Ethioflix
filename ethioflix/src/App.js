import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Genre from './genre';
import Login from './login';
import Signup from './signup';
import Footer from './footer';


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
