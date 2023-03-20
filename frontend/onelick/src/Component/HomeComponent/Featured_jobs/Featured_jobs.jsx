import React, { useState, useEffect } from 'react'
import './Features_jobs.css'
import { BsBriefcase } from 'react-icons/bs';
import { TbClockHour4 } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import { GiCash } from 'react-icons/gi';
import { BiBookmark } from 'react-icons/bi';
import logoImg from '../../../assets/company_logo1.png'
// import Data from "../../../Json_data/job.json"
import { slice } from 'lodash';
import { Link } from 'react-router-dom';


const Featured_jobs = () => {

    var flag = true;
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();


    const [FeaturedJobs, setFeaturedJobs] = useState([])
    const data = slice(FeaturedJobs, 0, 6)

    const getData = () => {
        fetch(process.env.REACT_APP_JOB_POSTED)
            .then((res) => res.json())
            .then((json) => setFeaturedJobs(json))
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div id='Featured_container'>
            <div className='Featured_jobs_categories_hld'>
                <div className="featured_job_title_hld">
                    <h1 data-aos="fade-up"
                    // data-aos-duration="1000"
                    >Featured Jobs</h1>
                    <p data-aos="fade-up"
                        // data-aos-duration="1000"
                        data-aos-delay="200">Know your Worth and find the job that qualify your life</p>
                </div>
                <div data-aos="fade-up"
                    // data-aos-duration="2000"
                    className="featured_categories_hld">
                    <select name="" id="featured_categories">
                        <option value="">All Categories</option>
                        <option value="">category 1</option>
                        <option value="">category 2</option>
                        <option value="">category 3</option>
                    </select>
                </div>
            </div>
            <div data-aos="fade-up"
                // data-aos-duration="2000"
                data-aos-delay="200"
                className='Featured_jobs_hld'>
                {data && data.map((data) => {
                    return (
                        <div
                            key={data.id} id="Featured_jobs">
                            <div className="company_logo">
                                <img src={`${data.image}`} alt="" />
                            </div>
                            <div className="job_content_hld">
                                <h3>{data.title}</h3>
                                <ul className="job_details_row1">
                                    <li>
                                        <BsBriefcase size={20} className="job_icon" />
                                        <p>{data.jobProfile}</p>
                                    </li>
                                    <li>
                                        <CiLocationOn size={20} className="job_icon" />
                                        <p>{data.location}</p>
                                    </li>
                                    <li>
                                        <TbClockHour4 size={20} className="job_icon" />
                                        {/* replace the logic by subtracting current time and data */}
                                        <p>{data.postedTime}</p>
                                    </li>
                                    <li>
                                        <GiCash size={20} className="job_icon" />
                                        <p>{data.salary}</p>
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
                            <div className="addToFavourite">
                                <BiBookmark size={20} />
                            </div>
                        </div>

                    )
                })

                }
            </div>
            <div data-aos="fade-up"
                // data-aos-duration="2000"
                className="load_more_button">
                    <Link to="findjobs">
                <button>Load More Listing</button>
                </Link>
            </div>
        </div>
    )
}

export default Featured_jobs
