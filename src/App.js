import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Header from './components/Header'
import { useState } from 'react';

function App() {

  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"))
  return (
    <Router> 
      <Header isLogged={isLogged} setIsLogged={setIsLogged}/>
      <Routes>
        <Route path='/' element={<Home isLogged={isLogged} setIsLogged={setIsLogged}/>} /> 
        <Route path='/createpost' element={<CreatePost isLogged={isLogged} />} /> 
        <Route path='/login' element={<Login setIsLogged={setIsLogged}/>} />
        
      </Routes> 
      </Router>
      
    
  );
}

export default App;
