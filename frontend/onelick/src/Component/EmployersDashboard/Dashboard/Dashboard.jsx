import React from 'react'
import './Dashboard.css'
import { SlBriefcase } from 'react-icons/sl';
import { TbFileInvoice } from 'react-icons/tb';

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
  import faker from 'faker'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


const Dashboard = () => {
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
                    <TbFileInvoice size={30} color={"#D93025"} className="icon" />
                    <div className="content">
                        <span style={{ color: "#D93025", fontSize: "30px", fontWeight: "500" }}>9382</span>
                        <span style={{ fontSize: "14px" }}>Application</span>
                    </div>
                </div>
                <div className="tag_cards">
                    <SlBriefcase color={"#F9AB00"} size={30} className="icon" />
                    <div className="content">
                        <span style={{ color: "#F9AB00", fontSize: "30px", fontWeight: "500" }}>22</span>
                        <span style={{ fontSize: "14px" }}>Messages</span>
                    </div>
                </div>
                <div className="tag_cards">
                    <SlBriefcase color={"#35a953"} size={30} className="icon" />
                    <div className="content">
                        <span style={{ color: "#35a953", fontSize: "30px", fontWeight: "500" }}>22</span>
                        <span style={{ fontSize: "14px" }}>Shortlist</span>
                    </div>
                </div>
            </div>

            <div className="chart_notification_hld">
                <div className="views_statistic">
                <Line options={options} data={data} />;
                </div>
            </div>
        </section>
    )
}

export default Dashboard
