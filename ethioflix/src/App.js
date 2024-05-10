import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  useLocation,
} from "react-router-dom";
import Header from "./header";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Footer from "./footer";
import Movies from "./Movies";
import Landing from "./landing/landing";
import About from "./about/about";
import Logout from "./logout/logout";
import Welcome from "./welcome/welcome";

function Content() {
  // Custom hook to get the current location
  const location = useLocation();
  // Determine whether to hide header and footer based on location
  const hideHeaderFooter = location.pathname === "/";

  return (
    <div>
      {/* Conditionally render Header if not on home page */}
      {!hideHeaderFooter && (
        <div>
          <Header />
        </div>
      )}
      <div className="content">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Landing />} />
          </Route>
          <Route path="/about" element={<Outlet />}>
            <Route index element={<About />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/genre/action" element={<Movies />} />
        </Routes>
      </div>
      {/* Conditionally render Footer if not on home page */}
      {!hideHeaderFooter && (
        <div>
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;
