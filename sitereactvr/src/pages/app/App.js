import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../../components/appBar/AppBar';
import VideoCard from '../../components/VideoSolution/VideoCard';
import GetDataVr from '../../components/DataVr/GetDataVr';
import EventCapture from '../../components/DataVr/PostDataVr';
import VirtualMechatronicsLab from '../Home';
import MainContent from '../Worldskill';
import Footer from '../../components/Footer/Footer';
import Partners from '../../components/Partners/Partners';

function App() {
  return (
    <div className="App">
      <Router>
 
      <Header PageName={"test"}></Header>
      <VideoCard></VideoCard>
      <GetDataVr></GetDataVr>
      <EventCapture></EventCapture>
      <VirtualMechatronicsLab></VirtualMechatronicsLab>
      <Routes>
      <Route path="/Home" element={<VirtualMechatronicsLab/>}/>
      <Route path="/worldskills" element={<MainContent />} />
      </Routes>
      <Partners></Partners>
      <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
