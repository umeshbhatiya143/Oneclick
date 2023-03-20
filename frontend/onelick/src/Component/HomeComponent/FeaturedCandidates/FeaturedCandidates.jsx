import React, { useState, useEffect } from 'react'
import './FeaturedCandidates.css'
import { BsBriefcase } from 'react-icons/bs';
import { TbClockHour4 } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import { GiCash } from 'react-icons/gi';
import { BiBookmark } from 'react-icons/bi';
import candidatePhoto from '../../../assets/member2.jpg'
// import Data from "../../../Json_data/job.json"
import { slice } from 'lodash';
import { Link } from 'react-router-dom';


const FeaturedCandidates = () => {
  const [candidates, setcandidates] = useState([])
  const data = slice(candidates, 0, 6)

  const getData = () => {
    fetch(process.env.REACT_APP_JOB_POSTED)
      .then((res) => res.json())
      .then((data) => setcandidates(data))
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div id='Featured_container'>
      <div className='Featured_jobs_categories_hld'>
        <div className="featured_job_title_hld">
          <h1>Featured Candidates</h1>
          <p>Know your Worth and find the job that qualify your life</p>
        </div>
      </div>
      <div data-aos="fade-up"
        // data-aos-duration="2000"
        className='Featured_jobs_hld'>
        {data && data.map((data) => {
          return (
            <div key={data.id} id="Featured_candidates">
              <div className='featured_candidates_left'>
                <div className="candidate_photo">
                  <img src={candidatePhoto} alt="" />
                </div>
                <div className="candidate_content_hld">
                  <h3>Darlene Robertson</h3>
                  <h5>UI Designer</h5>
                  <p><CiLocationOn size={18} className="job_icon" />
                    London, UK</p>
                </div>
              </div>
              <div className="profile_btn">
                View Profile
              </div>
            </div>
          )
        })
        }
      </div>
      <div data-aos="fade-up"
        // data-aos-duration="2000"
        className="load_more_button">
        <Link to="candidates">
          <button>Load More Listing</button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCandidates

