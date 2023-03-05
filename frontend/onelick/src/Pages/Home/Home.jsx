import React from 'react'
import Landingpage from '../../Component/LandingPage/Landingpage'
import Navbar from '../../Component/Navbar/Navbar'
import ClientShowCase from '../../Component/ClientShowCase/ClientShowCase'
import './Home.css'
import Featured_jobs from '../../Component/Featured_jobs/Featured_jobs'
import Testimonial from '../../Component/Testimonial/Testimonial'
import About from '../../Component/AboutSection/About'
import JobCategory from '../../Component/JobCategories/JobCategories'
import CandidateSection from '../../Component/CandidateSection/CandidateSection'
import Footer from '../../Component/Footer/Footer'

const Home = () => {
  return (
    <div className='Home_container'>
      <Navbar/>
      <Landingpage/>
      <ClientShowCase/>
      <Featured_jobs/>
      <About/>
      <Testimonial/>
     <JobCategory/>
     <CandidateSection/>
     <Footer/>
    
    </div>
  )
}

export default Home
