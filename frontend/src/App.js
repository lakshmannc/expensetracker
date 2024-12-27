import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Pages/Main.jsx';
import Login from './Components/Login/Login.jsx';

function App() {
  return (
    <div>
    <BrowserRouter>
      
      <Routes>
      <Route path = '/' element = {<Main/>}/> 
      <Route path = '/login' element = {<Login/>}/>
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
