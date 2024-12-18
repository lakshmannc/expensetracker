
import './App.css';
import './Pages/Main.jsx'
import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Pages/Main.jsx';


function App() {
  return (
    <div>
    <BrowserRouter>  
      <Main/>      
      <Routes> 
          
      <Route path = '/login' element = {<LoginSignup/>}/>
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
