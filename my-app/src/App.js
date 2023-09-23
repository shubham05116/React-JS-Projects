import logo from './logo.svg';
import './App.css';
import Topbar from "./components/topbar/Topbar"
import Home from "./Pages/Home"
import SinglePost from './components/SinglePost/SinglePost';
import Single from './Pages/Single';

function App() {
  
  return (
    <div className="App">
  <Topbar/>
<Single/>
    </div>
  );
}

export default App;
