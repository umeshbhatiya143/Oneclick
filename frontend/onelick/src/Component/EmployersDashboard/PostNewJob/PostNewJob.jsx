import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { VscBriefcase } from 'react-icons/vsc';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { BsCheck2Circle } from 'react-icons/bs';
import '../CompanyProfile/CompanyProfile.css'
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import AddressSelector from './AddressSelector';

const PostNewJob = () => {
  const [dropOpen, setdropOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);


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

  return (
    <section id='PostNewJob'>

      {/* css for this section inherited from eployers dashboard */}
      <div className="dashboard_heading_hld">
        <h1>Post a New Job!</h1>
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
        <h4>Post Job</h4>

        <div className="data_row2">
          <div className="icon_hld" data-aos="zoom-in">
            <VscBriefcase size={30} className='icon' />
            <span>Job Detail</span>
          </div>
          <div className="icon_hld" data-aos="zoom-in">
            <FaMoneyBillAlt size={30} className='icon' />
            <span>Package & payments</span>
          </div>
          <div className="icon_hld" data-aos="zoom-in">
            <BsCheck2Circle size={30} className='icon' />
            <span>Confirmation</span>
          </div>
        </div>

        <form action="">

          <div className="data_row3">
            <div className="left">
              <label htmlFor="Title">Job Title</label>
              <input type="text" id='Title' placeholder='software developer' />
            </div>
          </div>

          <div className="data_row3">
            <label htmlFor="description">Job Description</label>
            <textarea name="" id="description" placeholder='Onelick is a digital platform that serves as a job portal, connecting employers with job seekers. Founded in 2023, Onelick is a startup that aims to simplify the job search process by providing an easy-to-use and effective platform for both employers and job seekers.

Onelick offers a range of features that help job seekers find their dream job quickly and easily. The platform allows users to create and upload their resumes, browse and apply for job openings, and receive notifications about job opportunities that match their skills and interests. Employers, on the other hand, can post job vacancies, review resumes, and connect with potential candidates.            '/>
          </div>

          <div className="data_row2">
            <div className="left">
              <label htmlFor="specialisms">Specialisms</label>

              <Select2

                multiple
                // defaultValue={[1, 4]}
                data={[
                  { text: 'Banking', id: 1 },
                  { text: 'IT Services', id: 2 },
                  { text: 'Digital & Creative', id: 3 },
                  { text: 'Accounting & Finance', id: 4 },
                  { text: 'Human Resources', id: 5 },
                  { text: 'Retail', id: 6 },
                  { text: 'Digital Art', id: 7 },
                ]}
                options={{
                  placeholder: 'search by tags',
                }}
              />
            </div>
            <div className="right">
              <label htmlFor="JobType">Job Type</label>
              <select name="" id="JobType">
                <option value="">Select...</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>
          <div className="data_row2">
            <div className="left">
              <label htmlFor="offeredSalary">Offered Salary (CTC)</label>
              <select name="" id="offeredSalary">
                <option value="">Select...</option>
                <option value="300000 - 400000">₹300000 - 400000</option>
                <option value="400000 - 600000">₹400000 - 600000</option>
                <option value="600000 - 900000">₹600000 - 900000</option>
                <option value="900000 - 1100000">₹900000 - 1100000</option>
                <option value="1200000 - 1500000">₹1200000 - 1500000</option>
              </select>
            </div>
            <div className="right">
              <label htmlFor="careerLevel">Career Level</label>
              <select name="" id="careerLevel">
                <option value="">Select...</option>
                <option value="Fresher">Fresher</option>
                <option value="Experienced">Experienced</option>
              </select>
            </div>
          </div>
          <div className="data_row2">
            <div className="left">
              <label htmlFor="CompanyType">Experience (in years)</label>
              <select name="" id="experience">
                <option value="">Select...</option>
                <option value="0-2">0-2</option>
                <option value="2-5">5-7</option>
                <option value="7-9">7-9</option>
                <option value="9-11">9-11</option>
                <option value="12-15">12-15</option>
              </select>
            </div>
            <div className="right">
              <label htmlFor="gender">Gender</label>
              <select name="" id="gender">
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="data_row2">
            <div className="left">
              <label htmlFor="Industry">Industry</label>
              <select name="" id="Industry">
                <option value="">Select...</option>
                <option value="Banking">Banking</option>
                <option value="IT Services">IT Services</option>
                <option value="Marketing">Marketing</option>
                <option value="Management">Management</option>
              </select>
            </div>
            <div className="right">
              <label htmlFor="Qualification">Qualification</label>
              <select name="" id="Qualification">
                <option value="">Select...</option>
                <option value="B.E./B.Tech"></option>
              </select>
            </div>
          </div>

          <div className="data_row3">
            <div className="left">
              <label htmlFor="deadline">Application Deadline Date</label>
              <input type="date" id='deadline' />
            </div>
          </div>
         
         {/* address selector */}
         <AddressSelector/>
          
          <input type="submit" value="Save" className='submit' />
        </form>
      </div>

      {/* copyright content */}
      <div className="copyright_hld">
        <p>&copy; 2023 All Rights Reserved, Developed by Umesh Bhatiya</p>
      </div>
    </section>
  )
}

export default PostNewJob
