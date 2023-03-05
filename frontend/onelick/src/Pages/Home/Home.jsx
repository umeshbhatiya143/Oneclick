import React from 'react'
import Landingpage from '../../Component/LandingPage/Landingpage'
import Navbar from '../../Component/Navbar/Navbar'
import ClientShowCase from '../../Component/ClientShowCase/ClientShowCase'
import './Home.css'
import Featured_jobs from '../../Component/Featured_jobs/Featured_jobs'
import Testimonial from '../../Component/Testimonial/Testimonial'

const Home = () => {
  return (
    <div className='Home_container'>
      <Navbar/>
      <Landingpage/>
      <ClientShowCase/>
      <Featured_jobs/>
      <Testimonial/>
    
    </div>
  )
}

export default Home
