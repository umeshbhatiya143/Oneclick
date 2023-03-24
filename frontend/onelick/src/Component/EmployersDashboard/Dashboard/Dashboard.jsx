import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import { SlBriefcase } from 'react-icons/sl';
import { TbFileInvoice } from 'react-icons/tb';
import { BiMessageAltDetail } from 'react-icons/bi';
import { FiBookmark } from 'react-icons/fi';
import { GiTakeMyMoney } from 'react-icons/gi';
import { BsBriefcase } from 'react-icons/bs';
import { TbClockHour4 } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoEyeOutline } from 'react-icons/io5';
import { RxCrossCircled } from 'react-icons/rx';
import { IoCheckmark } from 'react-icons/io5';
import { GiCash } from 'react-icons/gi';
import { BiBookmark } from 'react-icons/bi';
import candidatePhoto from '../../../assets/client_photo.jpg'


// import for chart
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Candidates from '../../../Pages/Candidates/Candidates';
//   import {faker} from 'faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const Dashboard = () => {

    const [viewsDuration, setviewsDuration] = useState("6")
    const [applicants, setapplicants] = useState([])
    const [adminLabel, setadminLabel] = useState()

    var labels;
    if (viewsDuration === "6") {
        labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    }
    else if (viewsDuration === "12") {
        labels = ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"];
    }
    else if (viewsDuration === "18") {
        labels = ['0', '6 Months', '12 Months', '18 Months'];
    }
    else if (viewsDuration === "24") {
        labels = ['0', '6 Months', '12 Months', '18 Months', '24 Months'];
    }
    else if (viewsDuration === "5") {
        labels = ['0', '1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year'];
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
        scales: {
            y: {
                min: 0,
                max: 50,
            },
        },
        ticks: {
            stepSize: 10
        }
    };
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1, 5, 6, 9, 12, 15],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [3, 5, 6, 9, 15, 17],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const dummyNames = [
        {
            "id": 1,
            "name": "Umesh bhatiya",
            "jobPosition": "Product Designer"
        },
        {
            "id": 2,
            "name": "Prashant Bairagi",
            "jobPosition": "Web Developer"
        }
    ]

    const handleViewApplication = () => {

    }
    const handleApproveApplication = () => {

    }
    const handleRejectApplication = () => {

    }
    const handleDeleteApplication = () => {

    }

    // fetch applicants data
    const getData = () => {
        fetch(process.env.REACT_APP_JOB_POSTED)
            .then((res) => res.json())
            .then((json) => setapplicants(json))
            .catch((e) => console.log(e))
    }

    // for refreshing page when change duration
    useEffect(() => {
        getData();
        // console.log(applicants)
    }, [viewsDuration, adminLabel])

    return (
        <section id='dashboard_container'>
            <div className="dashboard_heading_hld">
                <h1>Dashboard Home!</h1>
                <p>Ready to jump back in?</p>
            </div>

            <div className="fetched_data_row">
                <div className="tag_cards">
                    <SlBriefcase size={30} className="icon" color={"#1967D2"} />
                    <div className="content">
                        <span style={{ color: "#1967D2", fontSize: "30px", fontWeight: "500" }}>22</span>
                        <span style={{ fontSize: "14px" }}>Posted jobs</span>
                    </div>
                </div>
                <div className="tag_cards">
                    <TbFileInvoice size={30} color={"#D93025"} className="icon" style={{ backgroundColor: "#fbebe8" }} />
                    <div className="content">
                        <span style={{ color: "#D93025", fontSize: "30px", fontWeight: "500" }}>9382</span>
                        <span style={{ fontSize: "14px" }}>Application</span>
                    </div>
                </div>
                <div className="tag_cards">
                    <BiMessageAltDetail color={"#F9AB00"} size={30} className="icon" style={{ backgroundColor: "#fff7e5" }} />
                    <div className="content">
                        <span style={{ color: "#F9AB00", fontSize: "30px", fontWeight: "500" }}>22</span>
                        <span style={{ fontSize: "14px" }}>Messages</span>
                    </div>
                </div>
                <div className="tag_cards">
                    <FiBookmark color={"#35a953"} size={30} className="icon" style={{ backgroundColor: "#ebf6ec" }} />
                    <div className="content">
                        <span style={{ color: "#35a953", fontSize: "30px", fontWeight: "500" }}>22</span>
                        <span style={{ fontSize: "14px" }}>Shortlist</span>
                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------- */}

            <div className="chart_notification_hld">
                {/* profile statistics */}
                <div className="profile_statistic">
                    <div className="heading_dropdown_hld">
                        <h4>Your Profile Views</h4>
                        <select name="" id="" onChange={(e) => setviewsDuration(e.target.value)}>
                            <option value="6">Last 6 Months</option>
                            <option value="12">Last 12 Months</option>
                            <option value="18">Last 18 Months</option>
                            <option value="24">Last 24 Months</option>
                            <option value="5">Last 5 Year</option>
                        </select>
                    </div>
                    <Line options={options} data={data} />;
                </div>

                {/* notification container */}
                <div className="profile_notifications">
                    <h4>Notifications</h4>
                    {
                        dummyNames.map((data) => {
                            return (
                                <div key={data.id} className="notification">
                                    <div className='icon'>
                                        <SlBriefcase size={13} />
                                    </div>
                                    <p>
                                        <span style={{ color: "black", fontWeight: "600" }}>{data.name} </span>
                                        applied for a job
                                        <span style={{ color: "#1967D2", fontWeight: "500" }}> {data.jobPosition}</span>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* -----------------------recent applicants------------------ */}

            <div className="recent_applicants_container">
                <h4>Recent Applicants</h4>

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

export default Dashboard
