import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Signup from './component/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Signup/>}> </Route>
        <Route path="/Login" element={<Login/>}></Route>
       
        <Route path="/Dashboard" element={<Dashboard/>}> </Route>
      </Routes>
      </BrowserRouter>      
      
     
    </div>
  );
}

export default App;
