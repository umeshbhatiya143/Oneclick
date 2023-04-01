import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './ShortlistedResumes.css'
import { GiTakeMyMoney } from 'react-icons/gi';
import { CiLocationOn } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoEyeOutline } from 'react-icons/io5';
import { RxCrossCircled } from 'react-icons/rx';
import { IoCheckmark } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
import candidatePhoto from '../../../assets/client_photo.jpg'
import { Link } from 'react-router-dom';

const ShortlistedResumes = () => {
  const [dropOpen, setdropOpen] = useState(false)
  const [rowLimit, setrowLimit] = useState();
  const [rowdata, setrowdata] = useState()
  const [jobCategory, setjobCategory] = useState("Select a job category")
  const [applicants, setapplicants] = useState([])

  // sidebar menu
  const handleMenu = () => {
    const menu = document.getElementById('sidebar');

    if (dropOpen) {
      menu.style.height = "0px"
    }
    else {
      menu.style.height = "800px"
    }
    setdropOpen(!dropOpen);
  }

  const handleViewApplication = () => {

  }
  const handleApproveApplication = () => {

  }
  const handleRejectApplication = () => {

  }
  const handleDeleteApplication = () => {

  }

  // fetch applicants data
  const getData = async () => {
    const headers = { 'Content-Type': 'application/json' }
    await fetch(process.env.REACT_APP_JOB_POSTED, { headers })
      .then((res) => res.json())
      .then((json) => setapplicants(json))
      .catch((e) => console.log(e))
  }

  // for refreshing page when change duration
  useEffect(() => {
    getData();
    // console.log(data)
  }, [rowLimit, jobCategory])

  return (
    <section id='AllApplicants_container'>

      {/* css for this section inherited from eployers dashboard */}
      <div className="dashboard_heading_hld">
        <h1>Shortlisted Resumes!</h1>
        <p>Ready to jump back in?</p>
      </div>

      {/* Dashboard menu for mobile */}
      <div className="dashboard_menu" onClick={() => handleMenu()}>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <span>Menu</span>
      </div>
      {/* sidebar for mobile */}
      <div id="sidebar">
        <Sidebar />
      </div>

      {/* ------company data----- */}

      <div className="company_data_hld">

        {/* css inherited from dashboard */}
        <div className="heading_dropdown_hld">
          <h4>Resumes</h4>
          <div className="dropdowns">
            <div className="search">
              <input type="search" name="" id="" placeholder='search...'/>
              <AiOutlineSearch/>
            </div>
            <select name="" id="" onChange={(e) => setrowLimit(e.target.value)}>
              <option value="6">Last 6 Months</option>
              <option value="12">Last 12 Months</option>
              <option value="18">Last 18 Months</option>
              <option value="24">Last 24 Months</option>
              <option value="5">Last 5 Year</option>
            </select>
          </div>
        </div>

        {/* applicants data */}
        {/* css inherited from dashboard */}

        <div className="applicants_card_hld">
          {applicants.map((data) => {
            return (
              <div className="applicant_card">
                <img src={candidatePhoto} alt="" />

                <div className="content">
                  <h3>Umesh Bhatiya</h3>
                  <div className="content_row">
                    <span>Ui Designer</span>
                    <p><CiLocationOn size={20} />{data.location}</p>
                    <p><GiTakeMyMoney size={20} /> $44/hour</p>
                  </div>
                  <div className="content_row">
                    <p className="tags">App</p>
                    <p className="tags">Design</p>
                    <p className="tags">Digital</p>
                  </div>

                  {/* responsible for handling access */}
                  <div className="content_row">
                    <div className='admin_label'>
                      <label>View Application</label>
                      <IoEyeOutline className='icon'
                        onClick={() => handleViewApplication()} />
                    </div>
                    <div className="admin_label">
                      <label>Approve Application</label>
                      <IoCheckmark className='icon'
                        onClick={() => handleApproveApplication()} />
                    </div>
                    <div className="admin_label">
                      <label>Reject Application</label>
                      <RxCrossCircled className='icon'
                        onClick={() => handleRejectApplication()} />
                    </div>
                    <div className="admin_label">
                      <label>Delete Application</label>
                      <RiDeleteBinLine className='icon'
                        onClick={() => handleDeleteApplication()} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* copyright content */}
      <div className="copyright_hld">
        <p>&copy; 2023 All Rights Reserved, Developed by Umesh Bhatiya</p>
      </div>
    </section>
  )
}

export default ShortlistedResumes
