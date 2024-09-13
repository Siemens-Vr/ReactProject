import './App.css';
import Header from '../../components/appBar/AppBar';
import VideoCard from '../../components/VideoSolution/VideoCard';
import GetDataVr from '../../components/DataVr/GetDataVr';
import EventCapture from '../../components/DataVr/PostDataVr';
import Footer from '../../components/Footer/Footer';
import Partners from '../../components/Partners/Partners';
import VirtualMechatronicsLab from '../app/about'

// import VirtualMechatronicsLab from '../../../../about';
function App() {
  return (
    <div className="App">
      <Header PageName={"test"}></Header>
      <VideoCard></VideoCard>
      <GetDataVr></GetDataVr>
      <EventCapture></EventCapture>
      <VirtualMechatronicsLab></VirtualMechatronicsLab>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
}

export default App;
