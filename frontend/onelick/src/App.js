
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';

function App() {
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
