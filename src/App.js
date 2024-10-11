
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
    <BrowserRouter>  
      <Navbar/>
      <Routes> 
          
      <Route path = '/login' element = {<LoginSignup/>}/>
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
