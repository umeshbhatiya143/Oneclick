import React from 'react'
import './TopCompany.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay} from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const TopCompany = () => {
    return (
        <section id='top_company_container' >
            {/* top company registered */}
            <div 
             className="top_company_registered">
                <div className="top_company_title_hld">
                    <h1>Top Company Registered</h1>
                    <p>Some of the companies we have helped recruit excellent applicants over the years.</p>
                </div>

                {/* for web view */}
                <div   data-aos="fade-up"
                 className="top_company_slider_container">

                    <Swiper
                      
                        // data-aos-duration="2000"
                        spaceBetween={30}
                        slidesPerView={1}
                        grabCursor={true}
                        centeredSlides={true}
                        breakpoints ={{
                            640:{
                                slidesPerView:3
                            },
                            1000:{
                                slidesPerView:5
                            }
                        }}
                        loop={true}
                        effect={'fade'}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="top_compnay_card_hld"
                    >

                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="top_compnay_card">
                                <span className='open_Positions'>15 Open Positions</span>
                                <img src="https://superio-next.vercel.app/images/resource/company-1.png" alt="" />
                                <span>CompanyName</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default TopCompany
