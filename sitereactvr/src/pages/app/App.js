import './App.css';
import Header from '../../components/appBar/AppBar';
import VideoCard from '../../components/VideoSolution/VideoCard';
import GetDataVr from '../../components/DataVr/GetDataVr';
import EventCapture from '../../components/DataVr/PostDataVr';
import Footer from '../../components/Footer/Footer';
import Partners from '../../components/Partners/Partners';
function App() {
  return (
    <div className="App">
      <Header PageName={"test"}></Header>
      <VideoCard></VideoCard>
      <GetDataVr></GetDataVr>
      <EventCapture></EventCapture>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
}

export default App;
