import './App.css';
import Header from '../../components/appBar/AppBar';
import VideoCard from '../../components/VideoSolution/VideoCard';
import GetDataVr from '../../components/DataVr/GetDataVr';
import EventCapture from '../../components/DataVr/PostDataVr';

function App() {
  return (
    <div className="App">
      <Header PageName={"test"}></Header>
      <VideoCard></VideoCard>
      <GetDataVr></GetDataVr>
      <EventCapture></EventCapture>
    </div>
  );
}

export default App;
