import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { BsArrowUp } from 'react-icons/bs';
import './CompanyProfile.css'
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import AddressSelector from '../PostNewJob/AddressSelector';

const CompanyProfile = () => {
  const [dropOpen, setdropOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
    { id: 3, text: 'Option 3' },
  ];

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
    <section id='companyProfile_container'>

      {/* css for this section inherited from eployers dashboard */}
      <div className="dashboard_heading_hld">
        <h1>Company Profile!</h1>
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
        <h4>My Profile</h4>
        <form action="">
          <div className="data_row1">
            <div className="left">
              <label for="getFile1" className="file_upload"><BsArrowUp size={20} /> Browse Logo</label>
              <input type="file" id="getFile1" className="hide" />
            </div>
            <div className="right">
              <p>Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</p>
            </div>
          </div>
          <div className="data_row1">
            <div className="left">
              <label htmlFor="getFile1" className="file_upload"><BsArrowUp size={20} /> Browse Cover</label>
              <input type="file" id="getFile1" className="hide" />
            </div>
            <div className="right">
              <p>Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</p>
            </div>
          </div>

          <hr />

          <div className="data_row2">
            <div className="left">
              <label htmlFor="companyName">Company Name</label>
              <input type="text" id='companyName' placeholder='Onelick' />
            </div>
            <div className="right">
              <label htmlFor="emailAddress">Email address</label>
              <input type="email" id='emailAddress' placeholder='onelick@gmail.com' />
            </div>
          </div>
          <div className="data_row2">
            <div className="left">
              <label htmlFor="phone">Phone Number</label>
              <input type="number" id='phone' placeholder='+91 123 456 7890' />
            </div>
            <div className="right">
              <label htmlFor="websiteUrl">Website Url</label>
              <input type="url" id='websiteUrl' placeholder='www.onelick.com' />
            </div>
          </div>
          <div className="data_row2">
            <div className="left">
              <label htmlFor="estSince">Est. Since</label>
              <input type="date" id='estSince' />
            </div>
            <div className="right">
              <label htmlFor="teamSize">Team Size</label>
              <select name="" id="teamSize">
                <option value="2-10">2-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501-1000">501-1000</option>
              </select>
            </div>
          </div>
          <div className="data_row2">
            <div className="left">
              <label htmlFor="CompanyType">Company Type</label>

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
              {/* <select name="CompanyType" id="CompanyType" multiple>
                <option value="Banking">Banking</option>
                <option value="IT-Services">IT Services</option>
                <option value="Digital-&-Creative">Digital & Creative</option>
                <option value="Accounting-&-Finance">Accounting & Finance</option>
                <option value="Human-Resources">Human Resources</option>
                <option value="Retail">Retail</option>
                <option value="Digital-Art">Digital Art</option>
               </select> */}
            </div>
            <div className="right">
              <label htmlFor="allowInSearch">Allow In Search & Listing</label>
              <select name="" id="allowInSearch">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="data_row3">
            <label htmlFor="about">About Company</label>
            <textarea name="" id="about" placeholder='Onelick is a digital platform that serves as a job portal, connecting employers with job seekers. Founded in 2023, Onelick is a startup that aims to simplify the job search process by providing an easy-to-use and effective platform for both employers and job seekers.

Onelick offers a range of features that help job seekers find their dream job quickly and easily. The platform allows users to create and upload their resumes, browse and apply for job openings, and receive notifications about job opportunities that match their skills and interests. Employers, on the other hand, can post job vacancies, review resumes, and connect with potential candidates.            '/>
          </div>
          <input type="submit" value="Save" className='submit' />
        </form>
      </div>

      {/* ------social network------- */}

      <div className="company_data_hld">
        <h4>Social Network</h4>
        <form action="">
          <div className="data_row2">
            <div className="left">
              <label htmlFor="Facebook">Facebook</label>
              <input type="url" id='Facebook' placeholder='www.facebook.com/onelick' />
            </div>
            <div className="right">
              <label htmlFor="Twitter">Twitter</label>
              <input type="url" id='Twitter' placeholder='www.twitter.com/onelick' />
            </div>
          </div>
          <div className="data_row2">
            <div className="left">
              <label htmlFor="Linkedin">Linkedin</label>
              <input type="url" id='Linkedin' placeholder='www.linkedin.com/onelick' />
            </div>
            <div className="right">
              <label htmlFor="Instagram">Instagram</label>
              <input type="url" id='Instagram' placeholder='www.instagram.com/onelick' />
            </div>
          </div>
          <input type="submit" value="Save" className='submit' />
        </form>
      </div>

      {/* -----contact information------ */}
      <div className="company_data_hld">
        <h4>Contact Information</h4>
        
        <form action="">
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

export default CompanyProfile
