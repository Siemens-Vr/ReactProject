import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../../components/appBar/AppBar';
import VideoCard from '../../components/VideoSolution/VideoCard';
import HomePage from '../Home';
import Products from '../Product';
import Worldskills from '../Worldskill';
import Sifa from '../Sifa';
import Blog from '../Blog';
import Contact from '../Contact';
import Login from '../login';
import SignUp from '../Signup';
import Forget from '../ForgetPassword';
import Footer from '../../components/Footer/Footer';
import Partners from '../../components/Partners/Partners';
import Add from '../AddProduct';

// Move useLocation inside the App function
function App() {
  const location = useLocation(); // This will now work inside Router

  // Hide Header, VideoCard, Partners, and Footer on /login and /signup pages
  const hideHeaderPartnersFooter = location.pathname === '/login' || location.pathname === '/signup'|| location.pathname === '/ForgetPassword';

  return (
    <div className="App">
      {/* Conditionally render Header, VideoCard, and Partners */}
      {!hideHeaderPartnersFooter && (
        <>
          <Header PageName={"test"} />
          <VideoCard />
        </>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/worldskills" element={<Worldskills />} />
        <Route path="/sifa" element={<Sifa />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ForgetPassword" element={<Forget />} />
        <Route path="/addProduct" element={<Add />} />
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
