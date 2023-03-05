import React from 'react'
import './About.css'
import aboutImg from '../../assets/aboutImage.jpg'

const About = () => {
    return (
        <section id='about_section'>
            <div className="about_img_content_hld">
                <div className="about_img_hld">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="about_text_hld">
                    <h3>Millions of Jobs. Find the one that suits you.</h3>
                    <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>
                    <ul>
                        <li>Creative Study Pattern</li>
                        <li>Quick Crash Courses</li>
                        <li>Certification Awarded</li>
                        <li>Provided with Experimental Examples</li>
                    </ul>
                    <div className="about_btn_hld">
                        <button>Watch Video</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
