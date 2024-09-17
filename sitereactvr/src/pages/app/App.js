import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../../components/appBar/AppBar';
import VideoCard from '../../components/VideoSolution/VideoCard';
import HomePage from '../Home';
import Worldskills from '../Worldskill';
import Sifa from '../Sifa';
import Blog from '../Blog' ;
import Contact from '../Contact';
import Login from '../login';
import SignUp from '../Signup';
import Footer from '../../components/Footer/Footer';
import Partners from '../../components/Partners/Partners';

function App() {
  return (
    <div className="App">
      <Router>
 
      <Header PageName={"test"}></Header>
      <VideoCard></VideoCard>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/worldskills" element={<Worldskills />} />
      <Route path="/sifa" element={<Sifa/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Partners></Partners>
      <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
