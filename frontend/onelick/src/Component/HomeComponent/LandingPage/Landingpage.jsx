import React from 'react'
import './LandingPage.css'
import Banner from '../../../assets/banner_img.png'
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineMapPin } from 'react-icons/hi2';

const Landingpage = () => {
   return (
      <div id='hero_container' className='hero_container'>
         <div className="hero_img_hld">
            <img src={Banner} alt="" />
         </div>
         <section className="hero_content_hld">
            <h1 data-aos="fade-right"
               data-aos-duration="1500"
               className="hero_content_title">There Are <span style={{
                  color
                     : "#1967D2"
               }}>93,178</span>  Posting Here For You!</h1>
            <p data-aos="fade-right"
               data-aos-duration="1800"
               data-aos-delay="400"
               className='hero_content_subTitle'>Find Jobs, Employment & Career Opportunities</p>
            <div data-aos="fade-left"
               data-aos-duration="2100"
               data-aos-delay="800"
               className="job_search_form">
               <form action="" method="">
                  <div className="job_search_form_row">
                     <div className="form_group">
                        <AiOutlineSearch color='gray' size={30} />
                        <input type="text" name="" id="" placeholder='Job title, keywords, or company' />

                     </div>
                     <div className="form_group">
                        <HiOutlineMapPin color='gray' size={30} />
                        <input type="text" name="" id="" placeholder='City or postcode' />

                     </div>
                     <input type="submit" value="Find Jobs" className='job_submit_button' />
                  </div>
               </form>
            </div>
            <div data-aos="fade-up"
               data-aos-duration="2400"
               data-aos-delay="1200"
               className="popular_searches">
               <span style={{ fontWeight: 500 }}>Popular Searches : &nbsp;</span>
               <span> Designer, Developer, Web, IOS, PHP, Senior, Engineer</span>
            </div>
         </section>
      </div>
   )
}

export default Landingpage
