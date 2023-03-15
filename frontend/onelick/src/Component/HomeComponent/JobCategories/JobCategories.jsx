import React from 'react'
import './JobCategories.css'
import { GiTakeMyMoney } from 'react-icons/gi';

const JobCategory = () => {
  return (
    <section id='job_category_container' >
      <div className="heading_hld">
        <h1>Popular Job Categories</h1>
        <p>2020 jobs live - 293 added today.</p>
      </div>
      <div className="categories_card_hld">
        <div data-aos="fade-right"
          // data-aos-duration="2000"
          className="category_card">
          <GiTakeMyMoney size={40} className="job_icon" />
          <div className="category_card_content">
            <h4>Accounting / Finance</h4>
            <p>(2 open positions)</p>
          </div>
        </div>
        <div data-aos="fade-up"
          // data-aos-duration="2000"
          className="category_card">
          <GiTakeMyMoney size={40} className="job_icon" />
          <div className="category_card_content">
            <h4>Accounting / Finance</h4>
            <p>(2 open positions)</p>
          </div>
        </div>
        <div data-aos="fade-left"
          // data-aos-duration="2000"
          className="category_card">
          <GiTakeMyMoney size={40} className="job_icon" />
          <div className="category_card_content">
            <h4>Accounting / Finance</h4>
            <p>(2 open positions)</p>
          </div>
        </div>
        <div data-aos="fade-right"
          // data-aos-duration="2000"
          className="category_card">
          <GiTakeMyMoney size={40} className="job_icon" />
          <div className="category_card_content">
            <h4>Accounting / Finance</h4>
            <p>(2 open positions)</p>
          </div>
        </div>
        <div data-aos="fade-up"
          // data-aos-duration="2000"
          className="category_card">
          <GiTakeMyMoney size={40} className="job_icon" />
          <div className="category_card_content">
            <h4>Accounting / Finance</h4>
            <p>(2 open positions)</p>
          </div>
        </div>
        <div data-aos="fade-left"
          // data-aos-duration="2000"
          className="category_card">
          <GiTakeMyMoney size={40} className="job_icon" />
          <div className="category_card_content">
            <h4>Accounting / Finance</h4>
            <p>(2 open positions)</p>
          </div>
        </div>
        <div data-aos="fade-right"
          // data-aos-duration="2000"
          className="category_card">
          <GiTakeMyMoney size={40} className="job_icon" />
          <div className="category_card_content">
            <h4>Accounting / Finance</h4>
            <p>(2 open positions)</p>
          </div>
        </div>
        <div data-aos="fade-up"
          // data-aos-duration="2000"
          className="category_card">
          <GiTakeMyMoney size={40} className="job_icon" />
          <div className="category_card_content">
            <h4>Accounting / Finance</h4>
            <p>(2 open positions)</p>
          </div>
        </div>
        <div data-aos="fade-left"
          //data-aos-duration="2000"
          className="category_card">
          <GiTakeMyMoney size={40} className="job_icon" />
          <div className="category_card_content">
            <h4>Accounting / Finance</h4>
            <p>(2 open positions)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobCategory
