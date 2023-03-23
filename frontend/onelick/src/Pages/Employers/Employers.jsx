import React from 'react'
import './Employers.css'
import Sidebar from '../../Component/EmployersDashboard/Sidebar/Sidebar';
import { Routes, Route, Outlet } from "react-router-dom";
import CompanyProfile from '../../Component/EmployersDashboard/CompanyProfile/CompanyProfile';
import PostNewJob from '../../Component/EmployersDashboard/PostNewJob/PostNewJob';
import ManageJobs from '../../Component/EmployersDashboard/ManageJobs/ManageJobs';
import AllApplicants from '../../Component/EmployersDashboard/AllApplicants/AllApplicants';
import ShortlistedResumes from '../../Component/EmployersDashboard/ShortlistedResumes/ShortlistedResumes';
import PackagesDetails from '../../Component/EmployersDashboard/PackagesDetail/PackagesDetails';
import Messages from '../../Component/EmployersDashboard/Messages/Messages';
import ResumeAlerts from '../../Component/EmployersDashboard/ResumeAlerts/ResumeAlerts';
import ChangePassword from '../../Component/EmployersDashboard/ChangePassword/ChangePassword';
import Dashboard from '../../Component/EmployersDashboard/Dashboard/Dashboard';
// import { useParams } from 'react-router-dom';


const Employers = () => {

  // const {empComponents} = useParams();
  return (
    <section id='Dashboard-container'>
      <div className="dashboard-container-sidebar">
      <Sidebar />
      </div>
     
      <div className="routes_component">
      <Routes>
        <Route>
          <Route  path="/" element={<Dashboard />} />
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route  path="/company-profile" element={<CompanyProfile />} />
          <Route path="/post-new-job" element={<PostNewJob />} />
          <Route path="/manage-jobs" element={<ManageJobs />} />
          <Route path="/all-applicants" element={<AllApplicants />} />
          <Route path="/shortlisted-resumes" element={<ShortlistedResumes />} />
          <Route path="/packages-details" element={<PackagesDetails />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/resume-alerts" element={<ResumeAlerts />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
      </Routes> 
      </div>
    </section>
  )
}

export default Employers
