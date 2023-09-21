import './App.css';
import AddTask from './components/AddTask';

import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {


    return (
        <div className='flex items-center flex-col gap-5 w-[11/12] h-screen '>
           <Header/>
           <AddTask/>
           <Tasks/>
        </div>
    );
};

export default App;
