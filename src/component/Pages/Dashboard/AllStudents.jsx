import React, { useState } from 'react'
import "./AllStudents.scss"
import Icons from '../../../Assets/Icons'

export const AllStudents = ({ data }) => {

    

    // console.log(data);
    const { Eye } = Icons;


    const [searchTerm, setSearchTerm] = useState("");
    const [selectedClass, setSelectedcClass] = useState("0");

    console.log(searchTerm);
    console.log(selectedClass);

    const filteredData = data.filter((student) => {
        const matchedSearch = `${student.first_name} ${student.last_name}`.toLowerCase().includes(searchTerm.toLowerCase());

        const matchedClasses =
            selectedClass === "0" || String(student.class) === selectedClass;

        return matchedSearch && matchedClasses;
    })




    const len = filteredData.length;
    console.log("filter: ", len);


    const [limit, setlimit] = useState(12);

    const increment = () => {
        if (len === limit) {
            setlimit(12);
        }
        else if (len - limit < 12) {
            setlimit(len);
        }
        else {
            setlimit(limit + 12);
        }
    };




    return (
        <div className='all-students-container'>

            <div className="all-students-header">
                <div className="header-left">
                    <h3>All Students</h3>
                    <p>Complete students directory with performance details</p>
                </div>

                <div className="header-right">
                    <input
                        type="text"
                        placeholder='Search Students...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}

                    />

                    <select
                        name="class"
                        id="class"
                        value={selectedClass}
                        onChange={(e) => setSelectedcClass(e.target.value)}
                    >
                        <option value="0" selected>All Classes</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 2</option>
                        <option value="3">Class 3</option>
                        <option value="4">Class 4</option>
                        <option value="5">Class 5</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                    </select>

                    

                </div>
            </div>

            <div className="student-tile-plate">
                {filteredData.slice(0, limit).map((student, index) => (

                    <div className="student-tile">
                        <img src={student.image} alt="student" className='student-image' />

                        <div className="student-tile-mid">
                            <p className="student-name">{`${student.first_name} ${student.last_name}`}</p>
                            <p className="student-class">Class {student.class}</p>

                            <div className="student-tile-mid-bottom">
                                <p className={`student-accuracy ${student.performance.accuracy >= 90 ? 'high-accuracy' : ''}`}>
                                    {student.performance.accuracy}%
                                </p>
                                <div className="student-points">
                                    <p className="value">{student.performance.points}</p>
                                    <p>XP</p>

                                </div>

                            </div>
                        </div>
                        <button className='view-profile'><Eye /></button>
                    </div>
                ))}
            </div>


            <button className='load-more' onClick={increment} >
                {limit < len && `Load More Students (${len - limit} remaining)`}
                {limit >= len && `Show less`}
            </button>
            {console.log("arr length : ", limit)}
        </div>
    )
}
