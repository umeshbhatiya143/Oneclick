import React, {useState, useEffect} from 'react'
import './RecentJobs.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import 'swiper/css/pagination';
import { BsBriefcase } from 'react-icons/bs';
import { TbClockHour4 } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import { GiCash } from 'react-icons/gi';
import { BiBookmark } from 'react-icons/bi';
import logoImg from '../../../assets/company_logo1.png'
// import Data from "../../../Json_data/job.json"
import { slice } from 'lodash';


const RecentJobs = () => {
    const [recentJobs, setrecentJobs] = useState([])
  
    const getData = () => {
      fetch(process.env.REACT_APP_JOB_POSTED)
        .then((res) => res.json())
        .then((data) => setrecentJobs(data))
        .catch((e) => console.log(e))
    }

    useEffect(() => {
    getData()
    }, [])

    return (
        <section id="recent_jobs_container">
            <div className="heading_hld">
                <h1>Recent Jobs</h1>
                <p>Know your worth and find the job that qualify your life</p>
            </div>

            {/* slider */}
            <div data-aos="fade-up"
                className="recent_jobs_carousel">

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                        // bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
                    }}
                    loop={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2
                        },
                        1000: {
                            slidesPerView: 3
                        }
                    }}
                    modules={[Autoplay, Pagination]}
                    className="Recent_jobs_hld"
                >
                    {recentJobs && recentJobs.map((data) => {
                        return (
                            <SwiperSlide>
                                <div key={data.id} id="Recent_jobs">
                                    <div className="company_logo">
                                        <img src={`${data.image}`} alt="" />
                                    </div>
                                    <div className="job_content_hld">
                                        <h4>{data.title}</h4>
                                        <ul className="job_details_row1">
                                            <li>
                                                <BsBriefcase size={20} className="job_icon" />
                                                <p>{data.jobProfile}</p>
                                            </li>
                                            <li>
                                                <CiLocationOn size={20} className="job_icon" />
                                                <p>{data.location}</p>
                                            </li>
                                        </ul>
                                        <ul className="job_details_row2">
                                            <li style={{ backgroundColor: "rgba(25,103,210,.15)", color: "rgb(25 103 210)" }}>
                                                {data.employementType}
                                            </li>
                                            <li style={{ backgroundColor: "rgba(52,168,83,.15)", color: "#34a853" }}>
                                                {data.mode}
                                            </li>
                                            <li style={{ backgroundColor: "#FEF2D9", color: "#FAAB00" }}>
                                                {data.requirement}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="addToFavourit">
                                        <BiBookmark size={20} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                    }

                </Swiper>
            </div>
        </section>
    )
}

export default RecentJobs
