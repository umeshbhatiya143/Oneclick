import React, { useEffect } from "react";
import './ClientShowCase.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Octus from '../../../assets/octus_logo2.png'
import Mobigood from '../../../assets/mobigood_logo.png'
import Phoenix from '../../../assets/phoenix_logo2.png'
import FuteServices from '../../../assets/futeServices_logo.png'
import MasterBrains from '../../../assets/masterbrain_logo2.png'
import Jmax from '../../../assets/jmax_logo.png'
import Growing_roots from '../../../assets/growing_roots_logo.png'
import Qodeleaf from '../../../assets/qodeleaf_logo.png'
import { Autoplay } from "swiper";



export default function Slider() {
    return (
        <section className="slider-container-hld">
            
                {/* for web view */}
                <div className="slider-container client_web_view">

                    <span data-aos="fade-up">Trusted By</span>

                    <Swiper
                     data-aos="fade-up"
                    //  data-aos-duration="100s"
                        spaceBetween={0}
                        slidesPerView={5}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="logo_contain_hld"
                    >

                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Growing_roots} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Qodeleaf} alt="" />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Mobigood} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Phoenix} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={FuteServices} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Jmax} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">
                                <img src={Octus} alt="" />
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="logo_contain">

                                <img src={MasterBrains} alt="" />
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>


                {/* for mobile view */}
                {/* <div className="slider-container client_mobile_view">

                    <span data-aos="fade-up">Trusted By 500+ Customers And Still Counting...</span>

                    <Swiper

                        data-aos="fade-up"
                        data-aos-duration="100s"
                        spaceBetween={40}
                        slidesPerView={3}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="logo_contain_hld"
                    >

                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Growing_roots} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Qodeleaf} alt="" />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Mobigood} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Phoenix} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={FuteServices} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">

                                <img src={Jmax} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="logo_contain">
                                <img src={Octus} alt="" />
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="logo_contain">

                                <img src={MasterBrains} alt="" />
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div> */}
        </section>
    )
}