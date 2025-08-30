import React from 'react'
import Icons from '../../../Assets/Icons'
import "./Dashboard.scss"
import Enrollment from './Enrollment';
import PerformanceChart from './PerformanceChart';
import Overview from './Overview';
import studentsData from "../../../Data/studentsData.json";
import { AllStudents } from './AllStudents';

const Dashboard = () => {

    const { Users, Cap, Chart, Trophy, Trophy2 } = Icons;
    const topStudents = studentsData.students
        .sort((a, b) => b.performance.points - a.performance.points);



        
    return (
        <div className='dashboard'>
            <div className="top">
                <div className="left">
                    <h1>Greenwood  Elementary School</h1>
                    <p>Welcome back, School Admin! Here's your school overview.</p>
                </div>

                <div className="right">
                    <div className='board'>CBSE BOARD</div>
                    <ul>
                        <li>Last Updated: 12/08/2025, 15:46:57</li>
                    </ul>
                </div>

            </div>

            <div className="mainContent">
                <div className="tileplate">
                    <div className="tile">
                        <div className='tileContent'>
                            TOTAL STUDENTS
                            <p className='mainVal'>245</p>
                            <p className='highlight'>+12%</p>
                            <p className='reference'>from last month</p>
                        </div>
                        <div className='tileIcon one'>
                            <Users />
                        </div>
                    </div>

                    <div className="tile">
                        <div className='tileContent'>
                            TOTAL CLASSES
                            <p className='mainVal'>8</p>
                            <p className='highlight'>+8%</p>
                            <p className='reference'>from last month</p>
                        </div>

                        <div className='tileIcon two'>
                            <Cap />
                        </div>
                    </div>

                    <div className="tile">
                        <div className='tileContent'>
                            AVG. PERFORMANCE
                            <p className='mainVal'>86.2%</p>
                            <p className='highlight'>+5%</p>
                            <p className='reference'>from last month</p>
                        </div>

                        <div className='tileIcon three'>
                            <Chart />
                        </div>
                    </div>

                    <div className="tile last">
                        <div className='tileContent'>
                            TOP PERFORMER
                            <p className='mainVal'>830 pts</p>
                            <p className='highlight'>Ahan K.</p>
                            <p className='reference'>from last month</p>
                        </div>

                        <div className='tileIcon four'>
                            <Trophy />

                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="enrollment">
                        <h3>Class-wise Student Enrollment</h3>
                        <p>Student distribution across different grades</p>
                        <div className="chart">
                            <Enrollment />

                        </div>



                    </div>
                    <div className="enrollment">
                        <h3>Class-wise Student Enrollment</h3>
                        <p>Student distribution across different grades</p>
                        <div className="chart">

                            <PerformanceChart />

                        </div>

                    </div>

                </div>


                <div className="leaderboard-overview">

                    <div className='leaderboard-overview-heading'>
                        <Trophy2 className='trophy1' />
                        <Trophy className='trophy2' />
                        <h3> School leader - Top 10 champions</h3>
                    </div>

                    <p>Out highest performing students this month with points and achievements</p>

                    <Overview data={topStudents.slice(0, 10)} />

                </div>


                <div className="all-students">
                    <AllStudents data={topStudents} />
                </div>








            </div>

        </div>
    )
}

export default Dashboard