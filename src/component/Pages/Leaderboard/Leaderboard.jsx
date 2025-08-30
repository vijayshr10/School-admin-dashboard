import React from 'react';
import "./Leaderboard.scss";
import Icons from '../../../Assets/Icons';
import trophy from '../../../Assets/trophy.svg';
import silvermedal from '../../../Assets/silvermedal.png';
import bronzemedal from '../../../Assets/bronzemedal.png';
import fire from "../../../Assets/fire.svg";
import thunder2 from '../../../Assets/thunder2.png'
import accuracy from '../../../Assets/accuracy.png'
import crown from '../../../Assets/crown.png'

import studentsData from "../../../Data/studentsData.json";


import SearchStudent from './SearchStudent';



const Leaderboard = () => {

  const { Trophy, Trophy2, Medal } = Icons;

  const topStudents = studentsData.students
    .sort((a, b) => b.performance.points - a.performance.points);


  const top3 = topStudents.slice(0, 3);

  // console.log(top3);






  return (
    <div className='leaderboard'>

      {/* top component CSS covered in dashboard */}
      <div className="top">
        <div className="left">
          <h1 className='top-left-heading'>
            <Trophy2 className='trophy1' />
            <Trophy className='trophy2' />School Leaderboard</h1>
          <p>Celebrating our top performers and encouraging healthy competition.</p>
        </div>

        <div className="right">
          Updated: 12/08/2025
        </div>
      </div>
      {/* -------------------top ends */}


      <div className="podium">
        <div className="podium-top">
          <h3>
            <Medal />
            Champions Podium
            <Medal />
          </h3>
          <p>This month's top 3 achievers</p>
        </div>

        <div className="podium-bottom">
          <div className="bar silver">

            <div className="image">
              <img src={top3[1].image} alt="student" className='stud-img' />
              <img src={silvermedal} alt='medal' className='medal' />
            </div>

            <div className="postion-content">
              <p className='name'>{`${top3[1].first_name} ${top3[1].last_name}`}</p>
              <p className='class'>{`Class ${top3[1].class}`}</p>
              <p className='points'>{`${top3[1].performance.points} pts`}</p>
            </div>

          </div>

          <div className="bar gold">

            <div className="image">
              <img src={top3[0].image} alt="student" className='stud-img' />
              <img src={trophy} alt='medal' className='medal' />
            </div>

            <div className="postion-content">
              <p className='name'>{`${top3[0].first_name} ${top3[0].last_name}`}</p>
              <p className='class'>{`Class ${top3[0].class}`}</p>
              <p className='points'>{`${top3[0].performance.points} pts`}</p>
              <div className='gold-icons'>
                <img src={trophy} alt="trophy" />
                <img src={fire} alt='fire' />
                <img src={thunder2} alt='thunder' />
              </div>
            </div>

          </div>

          <div className="bar bronze">

            <div className="image">
              <img src={top3[2].image} alt="student" className='stud-img' />
              <img src={bronzemedal} alt='medal' className='medal' />
            </div>

            <div className="postion-content">
              <p className='name'>{`${top3[2].first_name} ${top3[2].last_name}`}</p>
              <p className='class'>{`Class ${top3[2].class}`}</p>
              <p className='points'>{`${top3[2].performance.points} pts`}</p>
            </div>

          </div>


        </div>
      </div>


      <SearchStudent/>


      <div className="bottom-component">
        <div className="bottom-item">
          <img src={crown} alt="" />
          <h3 className='title'>Current Champion</h3>
          <p className='name'>{`${top3[0].first_name} ${top3[0].last_name}`}</p>
          <p className="val champion">{`${top3[0].performance.points} points`}</p>
        </div>

        <div className="bottom-item">
          <img src={fire} alt="" />
          <h3 className='title'>Longest Streak</h3>
          <p className='name'>{`${top3[0].first_name} ${top3[0].last_name}`}</p>
          <p className="val streak">{`${top3[0].performance.streak_days} points`}</p>
        </div>

        <div className="bottom-item">
          <img src={thunder2} alt="" />
          <h3 className='title'>Most Active</h3>
          <p className='name'>{`${top3[0].first_name} ${top3[0].last_name}`}</p>
          <p className="val active">{`${top3[0].performance.chapters_completed} points`}</p>
        </div>

        <div className="bottom-item">
          <img src={accuracy} alt="" />
          <h3 className='title'>Highest Accuracy</h3>
          <p className='name'>{`${top3[0].first_name} ${top3[0].last_name}`}</p>
          <p className="val accuracy">{`${top3[0].performance.accuracy} points`}</p>
        </div>




      </div>
    </div >


  )
}

export default Leaderboard