import { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FindJobs from './Pages/FindJobs/FindJobs';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Employers from './Pages/Employers/Employers';
import Candidates from './Pages/Candidates/Candidates';
import Blogs from './Pages/Blogs/Blogs';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      easing: 'ease-in-out-back',
      anchorPlacement: 'center-bottom'
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>

        {/* navbar */}
        <Navbar />
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path="findjobs" element={<FindJobs />} />
            <Route path="employers" element={<Employers/>} />
            <Route path="candidates" element={<Candidates/>} />
            <Route path="blogs" element={<Blogs/>} />
          </Route>
        </Routes>

        {/* footer */}
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
