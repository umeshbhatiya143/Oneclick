import { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from './Pages/Login/Login';

function App() {

  useEffect(() => {
    AOS.init({
        duration:1000,
        offset: 0,
        easing: 'ease-in-out-back',
        anchorPlacement: 'center-bottom'
    })
}, [])

  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>} />
          <Route path="login" element={<Login/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
