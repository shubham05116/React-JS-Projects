import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
    <Header />
    <Form/>
    <Tasks/>
    
    </div>
  );
}

export default App;
