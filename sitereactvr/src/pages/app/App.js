import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Header from '../../components/appBar/AppBar';
import VideoCard from '../../components/VideoSolution/VideoCard';
import HomePage from '../Home';
import About from '../About';
import Products from '../Product';
import Worldskills from '../Worldskill';
import Sifa from '../Sifa';
import Blog from '../Blog';
import Contact from '../Contact';
import Add from '../AddProduct';
import Login from '../login';
import Users from '../Users';
import SignUp from '../Signup';
import Forget from '../ForgetPassword';
import Footer from '../../components/Footer/Footer';
import Partners from '../../components/Partners/Partners';

// Move useLocation inside the App function
function App() {
  const location = useLocation(); // This will now work inside Router
     // Get user role and authentication status from local storage
     const [isAuthenticated, setIsAuthenticated] = useState(false);
     const [userRole, setUserRole] = useState(null);
  
  useEffect(() => {
    // Check if user is already authenticated (e.g., on page load)
    const role = sessionStorage.getItem('userRole');
    const auth = sessionStorage.getItem('isAuthenticated');
    
    if (auth === 'true') {
      setIsAuthenticated(true);
      setUserRole(role);
    }
  }, []);

  // Hide Header, VideoCard, Partners, and Footer on /login and /signup pages
  const hideHeaderPartnersFooter = location.pathname === '/login' || location.pathname === '/signup'|| location.pathname === '/ForgetPassword' || location.pathname === '/AddProduct' || location.pathname === '/Users';

  return (
    <div className="App">
      
      {!hideHeaderPartnersFooter && (
        <>
         <Header userRole={userRole} isAuthenticated={isAuthenticated} />
          <VideoCard />
        </>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/product" element={<Products />} />
        <Route path="/worldskills" element={<Worldskills />} />
        <Route path="/sifa" element={<Sifa />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/AddProduct" element={<Add />} />
        <Route path="/Users" element={userRole === 'admin' ? <Users /> : <Navigate to="/" />} />
        <Route path="/ForgetPassword" element={<Forget />} />
      </Routes>

      {/* Conditionally render Footer */}

      {!hideHeaderPartnersFooter && <Partners/>}
      {!hideHeaderPartnersFooter && <Footer />}
    </div>
  );
}

// Wrap App component inside Router
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
