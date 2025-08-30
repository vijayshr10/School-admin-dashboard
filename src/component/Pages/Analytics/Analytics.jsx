import React from 'react'
import PerformaceDist from './PerformaceDist'
import SkillPerformance from './SkillPerformance'
import "./Analytics.scss"


import studentsData from "../../../Data/studentsData.json"
import EngagementChart from './EngagementChart'

const Analytics = () => {

  // console.log(studentsData);

  return (
    <div className='analytics'>

      <h1 className='analytics-heading'>Analytics & Reports</h1>

      <div className="top-tiles">
        <div className='tileContent'>
          Total Learning Hours
          <p className='mainVal'>2,847</p>
          <p className='highlight'>+12% from last month</p>
        </div>

        <div className='tileContent'>
          Lessons Completed
          <p className='mainVal'>1,892</p>
          <p className='highlight'>+18% from last month</p>
        </div>

        <div className='tileContent'>
          Average Session Time
          <p className='mainVal'>24 min</p>
          <p className='highlight'>+8% from last month</p>
        </div>

        <div className='tileContent'>
          Active Students
          <p className='mainVal'>1,156</p>
          <p className='highlight'>+5% from last month</p>
        </div>

      </div>

      <div className="analytics-charts">
        <PerformaceDist data={studentsData}/>

        <SkillPerformance data={studentsData} />
      </div>

      <EngagementChart/>






    </div>
  )
}

export default Analytics