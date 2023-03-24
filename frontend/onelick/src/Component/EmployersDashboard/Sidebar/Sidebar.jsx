import React from 'react'
import './Sidebar.css'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineHome } from 'react-icons/md';
import { RiUserLine } from 'react-icons/ri';
import { BsSend } from 'react-icons/bs';
import { RiBriefcaseLine } from 'react-icons/ri';
import { TbFileInvoice } from 'react-icons/tb';
import { FiBookmark } from 'react-icons/fi';
import { BsBox2 } from 'react-icons/bs';
import { BiMessageAltDetail } from 'react-icons/bi';
import { AiOutlineBell } from 'react-icons/ai';
import { RxLockClosed } from 'react-icons/rx';
import { AiOutlineLogout } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';

const Sidebar = () => {

    const location = useLocation();
    // console.log(location.pathname)

    return (
        <div id="dashboard_menu">
            <ul>
                <li className={location.pathname === "/employers/dashboard" ? "highlight" : ""
                    ||
                    location.pathname === "/employers" ? "highlight" : ""
                }>
                    <Link to="dashboard">
                        <p className={location.pathname === "/employers/dashboard" ? "highlight" : ""
                            ||
                            location.pathname === "/employers" ? "highlight" : ""
                        }>
                            <MdOutlineHome size={20} />
                            Dashboard
                        </p>
                    </Link>
                </li>
                <li className={location.pathname === "/employers/company-profile" ? "highlight" : ""}>
                    <Link to="company-profile">
                        <p className={location.pathname === "/employers/company-profile" ? "highlight" : ""}>
                            <RiUserLine size={20} />
                            Company Profile
                        </p>
                    </Link>
                </li>
                <li className={location.pathname === "/employers/post-new-job" ? "highlight" : ""}>
                    <Link to="post-new-job">
                        <p className={location.pathname === "/employers/post-new-job" ? "highlight" : ""}>
                            <BsSend size={20} />
                            Post A New Job
                        </p>
                    </Link>
                </li>
                <li className={location.pathname === "/employers/manage-jobs" ? "highlight" : ""}>
                    <Link to="manage-jobs">
                        <p className={location.pathname === "/employers/manage-jobs" ? "highlight" : ""}>
                            <RiBriefcaseLine size={20} />
                            Manage Jobs
                        </p>
                    </Link>
                </li>
                <li className={location.pathname === "/employers/all-applicants" ? "highlight" : ""}>
                    <Link to="all-applicants">
                        <p className={location.pathname === "/employers/all-applicants" ? "highlight" : ""}>
                            <TbFileInvoice size={20} />
                            All Applicants
                        </p>
                    </Link>
                </li>
                <li className={location.pathname === "/employers/shortlisted-resumes" ? "highlight" : ""}>
                    <Link to="shortlisted-resumes">
                        <p className={location.pathname === "/employers/shortlisted-resumes" ? "highlight" : ""}>
                            <FiBookmark size={20} />
                            Shortlisted Resumes
                        </p>
                    </Link>
                </li>
                <li className={location.pathname === "/employers/packages-details" ? "highlight" : ""}>
                    <Link to="packages-details">
                        <p className={location.pathname === "/employers/packages-details" ? "highlight" : ""}>
                            <BsBox2 size={20} />
                            Packages
                        </p>
                    </Link>
                </li>
                <li className={location.pathname === "/employers/messages" ? "highlight" : ""}>
                    <Link to="messages">
                        <p className={location.pathname === "/employers/messages" ? "highlight" : ""}>
                            <BiMessageAltDetail size={20} />
                            Messages
                        </p>
                    </Link>
                </li>
                <li className={location.pathname === "/employers/resume-alerts" ? "highlight" : ""}>
                    <Link to="resume-alerts">
                        <p className={location.pathname === "/employers/resume-alerts" ? "highlight" : ""}>
                            <AiOutlineBell size={20} />
                            Resume Alerts
                        </p>
                    </Link>
                </li>
                <li className={location.pathname === "/employers/change-password" ? "highlight" : ""}>
                    <Link to="change-password">
                        <p className={location.pathname === "/employers/change-password" ? "highlight" : ""}>
                            <RxLockClosed size={20} />
                            Change Password
                        </p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <p>
                            <AiOutlineLogout size={20} />
                            Logout
                        </p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <p>
                            <RiDeleteBinLine size={20} />
                            Delete Profile
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
