import React from 'react'
import './About.css'
import aboutImg from '../../../assets/aboutImage.jpg'
import CountUp from 'react-countup';

const About = () => {
    return (
        <section id='about_section'>
            <div className="about_img_content_hld">
                <div data-aos="fade-right"
                // data-aos-duration="2000"
                 className="about_img_hld">
                    <img src={aboutImg} alt="" />
                </div>
                <div data-aos="fade-left"
                // data-aos-duration="2000"
                 className="about_text_hld">
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

            {/* client count up */}
            <div data-aos="fade-up"
                // data-aos-duration="2000"
             className="countUp_client">
                <CountUp
                    start={0}
                    end={4}
                    duration={2.75}
                    enableScrollSpy={true}

                >
                    {({ countUpRef, start }) => (
                        <div className="countup">
                            <div>
                                <span ref={countUpRef} />
                                <span>M</span>
                            </div>
                            <p>4 million daily active users</p>
                        </div>
                    )}
                </CountUp>
                <CountUp
                    start={0}
                    end={12}
                    duration={2.75}
                    enableScrollSpy={true}

                >
                    {({ countUpRef, start }) => (
                        <div className="countup">
                            <div>
                                <span ref={countUpRef} />
                                <span>K</span>
                            </div>
                            <p>Over 12k open job positions</p>
                        </div>
                    )}
                </CountUp>
                <CountUp
                    start={0}
                    end={20}
                    duration={2.75}
                    enableScrollSpy={true}

                >
                    {({ countUpRef, start }) => (
                        <div className="countup">
                            <div>
                                <span ref={countUpRef} />
                                <span>M</span>
                            </div>
                            <p>Over 20 million stories shared</p>
                        </div>
                    )}
                </CountUp>
            </div>

           
        </section>
    )
}

export default About
