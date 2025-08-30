import React from 'react'
import SearchStudent from '../Leaderboard/SearchStudent';

import "./Students.scss";
import Icons from '../../../Assets/Icons';


const {User2} = Icons;

const Students = () => {
  return (
    <div className='students-page'>

      <div className="students-page-top">
        <h1> <User2/> All Students</h1>
        <p>All avialable students in school</p>
      </div>

      <SearchStudent limit={300} />

    </div>
  )
}

export default Students