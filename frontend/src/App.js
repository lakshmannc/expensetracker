import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Pages/Main.jsx';
import Login from './Components/Login/Login.jsx';
import Expense from './Pages/Expense.jsx';

function App() {
  return (
    <div>
    <BrowserRouter>
      
      <Routes>
      <Route path = '/' element = {<Main/>}/> 
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/expense' element = {<Expense/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
