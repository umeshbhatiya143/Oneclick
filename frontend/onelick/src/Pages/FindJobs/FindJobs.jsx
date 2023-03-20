import React, { useState, useEffect } from 'react'
import './FindJobs.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { BiBriefcase } from 'react-icons/bi';
import { BsPlusCircleFill } from 'react-icons/bs';
import { BsBriefcase } from 'react-icons/bs';
import { TbClockHour4 } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import { GiCash } from 'react-icons/gi';
import { BiBookmark } from 'react-icons/bi';
import { AiFillMinusCircle } from 'react-icons/ai';
import { fill, filter, slice } from 'lodash'


const FindJobs = () => {
  const [showMoreExp, setshowMoreExp] = useState(false)
  const [salaryRange, setsalaryRange] = useState(0)
  const [post, setPost] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(5)
  const [filteredPost, setfilteredPost] = useState(post)
  const initialPosts = slice(filteredPost, 0, index)

  // states for filteration

  const [freelancerChecked, setFreelancerChecked] = useState(false);
  const [fullTimeChecked, setFullTimeChecked] = useState(false);
  const [partTimeChecked, setPartTimeChecked] = useState(false);
  const [temporaryChecked, setTemporaryChecked] = useState(false);

  const [allChecked, setAllChecked] = useState(false);
  const [lastHourChecked, setLastHourChecked] = useState(false);
  const [last24HoursChecked, setLast24HoursChecked] = useState(false);
  const [last7DaysChecked, setLast7DaysChecked] = useState(false);
  const [last14DaysChecked, setLast14DaysChecked] = useState(false);
  const [last30DaysChecked, setLast30DaysChecked] = useState(false);

  const [fresherChecked, setFresherChecked] = useState(false);
  const [oneYearChecked, setOneYearChecked] = useState(false);
  const [twoYearChecked, setTwoYearChecked] = useState(false);
  const [threeYearChecked, setThreeYearChecked] = useState(false);
  const [fourYearChecked, setFourYearChecked] = useState(false);
  const [fiveYearChecked, setFiveYearChecked] = useState(false);
  const [sixYearChecked, setSixYearChecked] = useState(false);
  const [sevenYearChecked, setSevenYearChecked] = useState(false);
  const [eightYearChecked, setEightYearChecked] = useState(false);
  const [nineYearChecked, setNineYearChecked] = useState(false);
  const [tenYearChecked, setTenYearChecked] = useState(false);

  const [AppChecked, setAppChecked] = useState(false);
  const [AdministrativeChecked, setAdministrativeChecked] = useState(false);
  const [AndroidChecked, setAndroidChecked] = useState(false);
  const [WordPressChecked, setWordPressChecked] = useState(false);
  const [DesignChecked, setDesignChecked] = useState(false);
  const [ReactChecked, setReactChecked] = useState(false);


  // console.log(process.env.REACT_APP_JOB_POSTED)
  const getData = () => {
    fetch(process.env.REACT_APP_JOB_POSTED)
      .then((res) => res.json())
      .then((json) => setPost(json))
      .catch((e) => console.log(e))
  }
  const loadMore = () => {
    setIndex(index + 5)
    console.log(index)
    if (index >= post.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  useEffect(()=>{
    getData()
  })
  useEffect(() => {
    // console.log(salaryRange)
    filterData()

  }, [
    salaryRange, freelancerChecked, fullTimeChecked, partTimeChecked, temporaryChecked,
    allChecked, lastHourChecked, last24HoursChecked, last7DaysChecked, last14DaysChecked, last30DaysChecked,
    fresherChecked, oneYearChecked, twoYearChecked, threeYearChecked, fourYearChecked, fiveYearChecked, sixYearChecked,
    sevenYearChecked, eightYearChecked, nineYearChecked, tenYearChecked,
    AppChecked, AdministrativeChecked, AndroidChecked, WordPressChecked, DesignChecked, ReactChecked
  ])

  // filter the post data
  const filterData = () => {
    // initialPosts.filter((curr)=>{
    //  if( !salaryRange && !freelancerChecked && !fullTimeChecked && !partTimeChecked && !temporaryChecked &&
    //   !allChecked && !lastHourChecked && !last24HoursChecked && !last7DaysChecked && !last14DaysChecked && !last30DaysChecked &&
    //   !fresherChecked && !oneYearChecked && !twoYearChecked && !threeYearChecked && !fourYearChecked && !fiveYearChecked && !sixYearChecked &&
    //   !sevenYearChecked && !eightYearChecked && !nineYearChecked && !tenYearChecked &&
    //   !AppChecked && !AdministrativeChecked && !AndroidChecked && !WordPressChecked && !DesignChecked && !ReactChecked )
    //   {
    //     filteredPost = post;
    //   }
    //   else{

    //   }
    // Filter by job type

    let filtered = post;

    if (freelancerChecked) {
      filtered = filtered.filter(p => console.log(p));
    }
    if (fullTimeChecked) {
      filtered = filtered.filter(p => p.jobType === 'Full Time');
    }
    if (partTimeChecked) {
      filtered = filtered.filter(p => p.jobType === 'Part Time');
    }
    if (temporaryChecked) {
      filtered = filtered.filter(p => p.jobType === 'Temporary');
    }

    // Filter by posted time
    if (allChecked) {
      // Do nothing
    }
    if (lastHourChecked) {
      filtered = filtered.filter(p => p.postedTime === 'Last Hour');
    }
    if (last24HoursChecked) {
      filtered = filtered.filter(p => p.postedTime === 'Last 24 Hours');
    }
    if (last7DaysChecked) {
      filtered = filtered.filter(p => p.postedTime === 'Last 7 Days');
    }
    if (last14DaysChecked) {
      filtered = filtered.filter(p => p.postedTime === 'Last 14 Days');
    }
    if (last30DaysChecked) {
      filtered = filtered.filter(p => p.postedTime === 'Last 30 Days');
    }

    // Filter by experience level
    if (fresherChecked) {
      filtered = filtered.filter(p => p.experienceLevel === 'Fresher');
    }
    if (oneYearChecked) {
      filtered = filtered.filter(p => p.experienceLevel === '1 Year');
    }
    if (twoYearChecked) {
      filtered = filtered.filter(p => p.experienceLevel === '2 Years');
    }
    if (threeYearChecked) {
      filtered = filtered.filter(p => p.experienceLevel === '3 Years');
    }
    if (fourYearChecked) {
      filtered = filtered.filter(p => p.experienceLevel === '4 Years');
    }
    if (fiveYearChecked) {
      filtered = filtered.filter(p => p.experienceLevel === '5 Years');
    }
    if (sixYearChecked) {
      filtered = filtered.filter(p => p.experienceLevel === '6 Years');
    }
    if (sevenYearChecked) {
      filtered = filtered.filter(p => p.experienceLevel === '7 Years');
    }
    if (eightYearChecked) {
      filtered = filtered.filter(p => p.experienceLevel === '8 Years');
    }
    if (nineYearChecked) {
      filtered = filtered.filter(p => p.experienceLevel === '9 Years');
    }
    if (tenYearChecked) {
      filtered = filtered.filter(p => p.experienceLevel === '10+ Years');
    }

    // Filter by skills
    if (AppChecked) {
      filtered = filtered.filter(p => p.skills.includes('App Development'));
    }
    if (AdministrativeChecked) {
      filtered = filtered.filter(p => p.skills.includes('Administrative Support'));
    }
    if (AndroidChecked) {
      filtered = filtered.filter(p => p.skills.includes('Android Development'));
    }
    if (WordPressChecked) {
      filtered = filtered.filter(p => p.skills.includes('WordPress Development'));
    }
    if (DesignChecked) {
      filtered = filtered.filter(p => p.skills.includes('Design'));
    }
    if (ReactChecked) {
      filtered = filtered.filter(p => p.skills.includes('React Development'));
    }

    // Filter by salary range
    if (salaryRange > 0) {
      filtered = filtered.filter(p => p.salary >= salaryRange);
    }

    setfilteredPost(filtered);
    setIndex(5);
  
  }

return (
  <section id='FindJobs'>
    {/* search area */}
    <div className="job_search_hld">
      <div className="job_search_area">
        <form action="" method="" className=''>
          <div className="job_search_form_row">
            <div className="form_group">
              <AiOutlineSearch color="gray" size={30} />
              <input type="text" name="" id="" placeholder='Job title, keywords, or company' />
            </div>
            <div className="form_group">
              <HiOutlineMapPin color="gray" size={30} />
              <input type="text" name="" id="" placeholder='City or postcode' />
            </div>
            <div className="form_group">
              <BiBriefcase color="gray" size={30} />
              <select name="" id="">
                <option value="">Choose a Category</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Apartments"></option>
              </select>
            </div>
            <input type="submit" value="Find Jobs" className='job_submit_button' />
          </div>
        </form>
      </div>
    </div>

    {/* filter and jobs hld */}
    <div className="filter_and_jobs_hld">

      {/* filter left portion */}
      <div className="left_filter">
        <ul>
          <h4>Job Type</h4>
          <li>
            <label className="switch" onClick={() => setFreelancerChecked(!freelancerChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Freelencer</p>
          </li>
          <li>
            <label className="switch" onClick={() => setFullTimeChecked(!fullTimeChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Full Time</p>
          </li>
          <li>
            <label className="switch" onClick={() => setPartTimeChecked(!partTimeChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Part Time</p>
          </li>
          <li>
            <label className="switch" onClick={() => setTemporaryChecked(!temporaryChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Temporary</p>
          </li>
        </ul>
        <ul>
          <h4>Date Posted</h4>
          <li>
            <label className="switch" onClick={() => setAllChecked(!allChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>All</p>
          </li>
          <li>
            <label className="switch" onClick={() => setLastHourChecked(!lastHourChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Last Hour</p>
          </li>
          <li>
            <label className="switch" onClick={() => setLast24HoursChecked(!last24HoursChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Last 24 Hour</p>
          </li>
          <li>
            <label className="switch" onClick={() => setLast7DaysChecked(!last7DaysChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Last 7 Days</p>
          </li>
          <li>
            <label className="switch" onClick={() => setLast14DaysChecked(!last14DaysChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Last 14 Days
            </p>
          </li>
          <li>
            <label className="switch" onClick={() => setLast30DaysChecked(!last30DaysChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Last 30 Days</p>
          </li>
        </ul>

        {/*--------- experience level---------*/}
        <ul>
          <h4>Experience Level</h4>
          <li>
            <label className="switch" onClick={() => setFresherChecked(!fresherChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Fresher</p>
          </li>
          <li>
            <label className="switch" onClick={() => setOneYearChecked(!oneYearChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>1 Year</p>
          </li>
          <li>
            <label className="switch" onClick={() => setTwoYearChecked(!twoYearChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>2 Year</p>
          </li>
          <li>
            <label className="switch" onClick={() => setThreeYearChecked(!threeYearChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>3 Year</p>
          </li>
          <li>
            <label className="switch" onClick={() => setFourYearChecked(!fourYearChecked)}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>4 Year</p>
          </li>
          {showMoreExp && <div className="view_more_experience">
            <li>
              <label className="switch"
                onClick={() => setFiveYearChecked(!fiveYearChecked)}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>5 Year</p>
            </li>
            <li>
              <label className="switch"
                onClick={() => setSixYearChecked(!sixYearChecked)}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>6 Year</p>
            </li>
            <li>
              <label className="switch"
                onClick={() => setSevenYearChecked(!sevenYearChecked)}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>7 Year</p>
            </li>
            <li>
              <label className="switch"
                onClick={() => setEightYearChecked(!eightYearChecked)}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>8 Year</p>
            </li>
            <li>
              <label className="switch"
                onClick={() => setNineYearChecked(!nineYearChecked)}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>9 Year</p>
            </li>
            <li>
              <label className="switch"
                onClick={() => setTenYearChecked(!tenYearChecked)}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>10 Year</p>
            </li>
          </div>
          }

          {/*-----------show more experience btn---------- */}

          {!showMoreExp && <li onClick={() => setshowMoreExp(!showMoreExp)} className="view_more_exp_btn">
            <BsPlusCircleFill size={17} />
            <p>View More</p>
          </li>}
          {showMoreExp && <li onClick={() => setshowMoreExp(!showMoreExp)} className="view_more_exp_btn">
            <AiFillMinusCircle size={20} />
            <p>View Less</p>
          </li>}

        </ul>

        {/*-------salary-----------*/}

        <ul>
          <h4>Salary</h4>
          <li className='salary_range'>
            <input value={salaryRange} type="range" name="rangeInput" min="0" max="100" step={10} onChange={(e) => setsalaryRange(e.target.value)} />
            <span>₹ &nbsp; {salaryRange}</span>
          </li>
        </ul>
        <ul>
          <h4>Tags</h4>
          <div className="tags">
            <li
              onClick={() => setAppChecked(!AppChecked)}
            ><p> App </p></li>
            <li
              onClick={() => setAdministrativeChecked(!AdministrativeChecked)}
            > <p> Administrative </p> </li>
            <li
              onClick={() => setAndroidChecked(!AndroidChecked)}
            ><p> Android </p> </li>
            <li
              onClick={() => setWordPressChecked(!WordPressChecked)}
            ><p> Wordpress </p> </li>
            <li
              onClick={() => setDesignChecked(!DesignChecked)}
            ><p> Design </p> </li>
            <li
              onClick={() => setReactChecked(!ReactChecked)}
            ><p> React </p> </li>

          </div>
        </ul>
      </div>

      {/* filter right portion */}
      <div className="jobs_container_hld">
        <div className="right_filters_hld">
          <div className="clearAll">Clear All</div>
          <select name="" id="">
            <option value="default">Sort by (default)</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
          <select name="" id="">
            <option value="All">All</option>
            <option value="15">15 per page</option>
            <option value="20">20 per page</option>
            <option value="30">30 per page</option>
          </select>
        </div>
        <div className="jobs_hld">
          {initialPosts && initialPosts.map((data) => {
            return (
              <div
                key={data.id} id="find_jobs_page_job_hld">
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
        <div className="jobs_load_more_btn_hld">
          <span>Showing {initialPosts.length} jobs of {post.length}</span>
          <input type="range" name="slider" id="" min={0} max={`${post.length}`} value={`${initialPosts.length}`} />
          {isCompleted ? (
            <button
              onClick={loadMore}
              type="button"
              className="jobs_load_more_done"
            >
              That's It !
            </button>
          ) : (
            <button onClick={loadMore} type="button" className="jobs_load_more_btn">
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  </section>
)
}

export default FindJobs
