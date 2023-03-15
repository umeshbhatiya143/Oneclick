import React from 'react'
import './Testimonial.css'
import client_photo from '../../../assets/client_photo.jpg'
import client_photo2 from '../../../assets/member1.jpg'
import client_photo3 from '../../../assets/member2.jpg'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
// import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "swiper/css/autoplay";

const Testimonial = () => {
  return (
    <section id="Testimonial_container">
      <div className="testimonial_up">
        <div className="testimonial_up_left">
          <img src="https://superio-next.vercel.app/images/resource/testimonial-left.png" alt="" />
        </div>
        <div className="testimonial_heading_hld">
          <h1>Testimonials From Our Customers</h1>
          <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</p>
        </div>
        <div className="testimonial_up_right">
          <img src="https://superio-next.vercel.app/images/resource/testimonial-right.png" alt="" />
        </div>
      </div>
      <div data-aos="fade-up"
        // data-aos-duration="2000"
        className="testimonial_carousel">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect={'fade'}
          centeredSlides={true}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
          }}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay, Pagination]}
          className="testimonial_card_hld"
        >
          <SwiperSlide >
            <div className="testimonial_card">
              <img src={client_photo} alt="" />
              <div className="testimonial_card_text">
                <div className="review_hld">
                  <h4>Great Quality!</h4>
                  <span>Without JobHunt i'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite... The Mitech team works really hard to ensure high level of quality</span>
                </div>
                <div className="testimonial_author">
                  <h4>Umesh Bhatiya</h4>
                  <p>Full Stack Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="testimonial_card">
              <img src={client_photo2} alt="" />
              <div className="testimonial_card_text">
                <div className="review_hld">
                  <h4>Awesome Design!</h4>
                  <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci sapiente laudantium labore modi aperiam nobis quos possimus ipsa illo itaque quisquam odit, veritatis ipsam!</span>
                </div>
                <div className="testimonial_author">
                  <h4>Brooklyn Simmons</h4>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="testimonial_card">
              <img src={client_photo3} alt="" />
              <div className="testimonial_card_text">
                <div className="review_hld">
                  <h4>Unique Design!</h4>
                  <span>Without JobHunt i'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite... The Mitech team works really hard to ensure high level of quality</span>
                </div>
                <div className="testimonial_author">
                  <h4>Brooklyn Simmons</h4>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial
