import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'

import { RiDeleteBinLine } from 'react-icons/ri';
import { IoEyeOutline } from 'react-icons/io5';
import { RxCrossCircled } from 'react-icons/rx';
import { IoCheckmark } from 'react-icons/io5';
import { BsBriefcase } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const PackagesDetails = () => {
  const [dropOpen, setdropOpen] = useState(false)
  const [rowLimit, setrowLimit] = useState();
  const [rowdata, setrowdata] = useState()


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
      .then((json) => setrowdata(json))
      .catch((e) => console.log(e))
  }

  // for refreshing page when change duration
  useEffect(() => {
    getData();
    // console.log(data)
  }, [rowLimit])

  return (
    <section id='ManageJobs_container'>

      {/* css for this section inherited from eployers dashboard */}
      <div className="dashboard_heading_hld">
        <h1>Manage Jobs!</h1>
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

      <div className="company_data_hld data_hld">

        {/* css inherited from dashboard */}
        <div className="heading_dropdown_hld">
          <h4>My Job Listing!</h4>
          <select name="" id="" onChange={(e) => setrowLimit(e.target.value)}>
            <option value="6">Last 6 Months</option>
            <option value="12">Last 12 Months</option>
            <option value="18">Last 18 Months</option>
            <option value="24">Last 24 Months</option>
            <option value="5">Last 5 Year</option>
          </select>
        </div>

        <div className="manage_row">
          <table>
            <tr>
              <th>Title</th>
              <th>Applications</th>
              <th>Created & Expired</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {rowdata?.map((val, key) => {
              return (
                <tr key={key}>
                  <td className='title'>
                    <img src={val.image} alt="" />
                    <div className="content">
                      <h3>{val.title}</h3>
                      <ul className="job_actions">
                        <li>
                          <BsBriefcase size={20} className="job_icon" />
                          <p>{val.jobProfile}</p>
                        </li>
                        <li>
                          <CiLocationOn size={20} className="job_icon" />
                          <p>{val.location}</p>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td style={{ color: "#292DF2" }}>
                    <Link to={"#"}>
                      3+ applied
                    </Link>
                  </td>
                  <td>
                    <div>
                      <p>October 27, 2017</p>
                      <p>April 25, 2011</p>
                    </div>
                  </td>
                  <td style={{ color: "#35A953" }}>{val.status}</td>

                  <td>
                    {/* css for this inherited from dashboard css */}

                    {/* responsible for handling access */}
                    <div className="content_row ">
                      <div className='admin_label manage_view'>
                        <label>View Application</label>
                        <IoEyeOutline className='icon'
                          onClick={() => handleViewApplication()} />
                      </div>
                      <div className="admin_label manage_approve">
                        <label>Approve Application</label>
                        <IoCheckmark className='icon'
                          onClick={() => handleApproveApplication()} />
                      </div>
                      <div className="admin_label manage_reject">
                        <label>Reject Application</label>
                        <RxCrossCircled className='icon'
                          onClick={() => handleRejectApplication()} />
                      </div>
                      <div className="admin_label manage_delete">
                        <label>Delete Application</label>
                        <RiDeleteBinLine className='icon'
                          onClick={() => handleDeleteApplication()} />
                      </div>
                    </div>

                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>

      {/* copyright content */}
      <div className="copyright_hld">
        <p>&copy; 2023 All Rights Reserved, Developed by Umesh Bhatiya</p>
      </div>
    </section>
  )
}

export default PackagesDetails
