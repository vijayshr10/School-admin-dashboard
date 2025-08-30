import React from 'react'
import "./Overview.scss"
import Icons from '../../../Assets/Icons'

import trophy from '../../../Assets/trophy.svg'
import silvermedal from '../../../Assets/silvermedal.png'
import bronzemedal from '../../../Assets/bronzemedal.png'
import firelogo from '../../../Assets/fire.svg'
import thunder from '../../../Assets/thunder.png'



const Overview = ({ data }) => {
  const { Star, Circle, Eye, Star1, Star2 } = Icons;

  return (
    <div className="overview-container">
      {data.map((student, index) => (
        <div className='Performance-Card'>

          {index === 0 && <img src={trophy} className='trophy' alt="" />}
          {index === 1 && <img src={silvermedal} className='medal' alt="" />}
          {index === 2 && <img src={bronzemedal} className='medal' alt="" />}
          {(index >= 3 && index <= 5) && <Star1 className='star' />}
          {(index >= 6 && index <= 9) && <Star2 className='star' />}

          <div className="rank">#{index + 1}</div>

          <div
            className={`img-container ${index === 0 ? 'gold-bg' :
              index === 1 ? 'silver-bg' :
                index === 2 ? 'bronze-bg' : ''
              }`}
          >
            <img src={student.image} alt="Student" />
          </div>

          <p className="name">{`${student.first_name} ${student.last_name}`}</p>
          <p className="class">Class {student.class}</p>

          <p className={`points ${index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : ''}`}>{student.performance.points} pts</p>

          <p
            className={`accuracy ${student.performance.accuracy >= 90 ? 'high-accuracy' : ''}`}
          >
            {student.performance.accuracy}% Accuracy
          </p>

          <p className="streak">
            <Star className='star' />{student.performance.chapters_completed}
            <Circle className='circle' /> {student.performance.streak_days} day streak
          </p>
          <button><Eye /> View Profile</button>

        </div>

      ))}

      <div className="top-performer">
        <div className="top-scorer">
          <img src={trophy} alt="trophy" />
          <h2>Top Scorer</h2>
          <p className='top-scorer-name'>{`${data[0].first_name} ${data[0].last_name} - ${data[0].performance.points} pts`}</p>

        </div>

        <div className="longest-streak">
          <img src={firelogo} alt="firelogo" />
          <h2>Longest Streak</h2>
          <p className='top-scorer-name'>{`${data[0].first_name} ${data[0].last_name} - ${data[0].performance.streak_days} days`}</p>
        </div>

        <div className="most-lessons">
          <img src={thunder} alt="firelogo" />
          <h2>Most Lessons</h2>
          <p className='top-scorer-name'>{`${data[0].first_name} ${data[0].last_name} - ${data[0].performance.chapters_completed} lessons`}</p>
        </div>
      </div>








    </div>
  )
}

export default Overview