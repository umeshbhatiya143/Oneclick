import React from 'react'
import './Home.css'
import Landingpage from '../../Component/HomeComponent/LandingPage/Landingpage'
import Navbar from '../../Component/Navbar/Navbar'
import ClientShowCase from '../../Component/HomeComponent/ClientShowCase/ClientShowCase'
import Featured_jobs from '../../Component/HomeComponent/Featured_jobs/Featured_jobs'
import Testimonial from '../../Component/HomeComponent/Testimonial/Testimonial'
import About from '../../Component/HomeComponent/AboutSection/About'
import JobCategory from '../../Component/HomeComponent/JobCategories/JobCategories'
import CandidateSection from '../../Component/HomeComponent/FeaturedCandidates/FeaturedCandidates'
import Footer from '../../Component/Footer/Footer'
import TopCompany from '../../Component/HomeComponent/TopCompanyRegistered/TopCompany'
import RecentJobs from '../../Component/HomeComponent/RecentJobs/RecentJobs'

const Home = () => {
  return (
    <div className='Home_container'>
      {/* <Navbar/> */}
      <Landingpage/>
      <ClientShowCase/>
      <Featured_jobs/>
      <About/>
      <TopCompany/>
      <Testimonial/>
      <JobCategory/>
      <RecentJobs/>
      <CandidateSection/>
      {/* <Footer/> */}
    
    </div>
  )
}

export default Home
