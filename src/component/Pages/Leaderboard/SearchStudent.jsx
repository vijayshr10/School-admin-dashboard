import React, { useState } from 'react';
import Icons from '../../../Assets/Icons';
import studentData from '../../../Data/students_monthly_performance.json';

import trophy from "../../../Assets/trophy.svg";
import silverMedal from "../../../Assets/silvermedal.png";
import bronzeMedal from "../../../Assets/bronzemedal.png";
import fire from '../../../Assets/fire.svg';
import thunder2 from '../../../Assets/thunder2.png'
import arm from "../../../Assets/arm.jpg";
import flower from "../../../Assets/flower.png";
import books from "../../../Assets/books.png";
import startOrbit from '../../../Assets/starOrbit.png';
import accuracy from '../../../Assets/accuracy.png';

const { Filter, Star2, Fire, Eye, Star1 } = Icons;

const monthMap = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",

};
const SearchStudent = ({limit = 12}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [searchedName, setSearchedName] = useState("");
    const [classSelected, setClasselected] = useState("0");
    const [month, setMonth] = useState("9");

    // Active filter states
    const [minAccuracy, setMinAccuracy] = useState(0);
    const [maxAccuracy, setMaxAccuracy] = useState(100);
    const [minPoints, setMinPoints] = useState(0);
    const [maxPoints, setMaxPoints] = useState(1000);

    // Temp states for input fields (More Filters dropdown)
    const [tempMinAccuracy, setTempMinAccuracy] = useState(minAccuracy);
    const [tempMaxAccuracy, setTempMaxAccuracy] = useState(maxAccuracy);
    const [tempMinPoints, setTempMinPoints] = useState(minPoints);
    const [tempMaxPoints, setTempMaxPoints] = useState(maxPoints);

    const moreFilterDropdown = () => setIsExpanded(prev => !prev);



    const applyFilters = () => {
        setMinAccuracy(tempMinAccuracy);
        setMaxAccuracy(tempMaxAccuracy);
        setMinPoints(tempMinPoints);
        setMaxPoints(tempMaxPoints);
        setIsExpanded(false); // close dropdown after applying
    };

    const resetFilters = () => {
        setSearchedName("");
        setClasselected("0");
        setMonth("9");
        setMinAccuracy(0);
        setMaxAccuracy(100);
        setMinPoints(0);
        setMaxPoints(1000);
        setTempMinAccuracy(0);
        setTempMaxAccuracy(100);
        setTempMinPoints(0);
        setTempMaxPoints(1000);

    };

    const filteredStudents = () => {
        const selectedMonth = monthMap[month];

        return studentData
            .filter(student => {
                const fullName = `${student.first_name} ${student.last_name}`.toLowerCase();

                // Filter by name
                if (searchedName && !fullName.includes(searchedName.toLowerCase())) return false;

                // Filter by class
                if (classSelected !== "0" && student.class !== classSelected) return false;

                // Determine performance data
                const perfData = month === "9" ? student.overall_performance : student.monthly_performance.find(m => m.month === selectedMonth);
                if (!perfData) return false;

                // Apply active accuracy filter
                if (perfData.accuracy < minAccuracy || perfData.accuracy > maxAccuracy) return false;

                // Apply active points filter
                if (perfData.points < minPoints || perfData.points > maxPoints) return false;

                return true;
            })
            .sort((a, b) => {
                const aPerf = month === "9" ? a.overall_performance : a.monthly_performance.find(m => m.month === selectedMonth);
                const bPerf = month === "9" ? b.overall_performance : b.monthly_performance.find(m => m.month === selectedMonth);
                return bPerf.points - aPerf.points; // sort by points descending
            });



    };

    const isHighlight = () => {
        return (
            searchedName === "" &&
            classSelected === "0" &&
            month === "9" &&
            minAccuracy === 0 &&
            maxAccuracy === 100 &&
            minPoints === 0 &&
            maxPoints === 1000
        );
    };

    return (
        <div>
            <div className="search-field">
                <input
                    type="text"
                    placeholder="Search students..."
                    value={searchedName}
                    onChange={(e) => setSearchedName(e.target.value)}
                />

                <select value={classSelected} onChange={(e) => setClasselected(e.target.value)}>
                    <option value="0">All Classes</option>
                    {[...Array(8)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>Class {i + 1}</option>
                    ))}
                </select>

                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                    <option value="9">Overall Till Now</option>
                    <option value="5">May</option>
                    <option value="4">April</option>
                    <option value="3">March</option>
                    <option value="2">February</option>
                    <option value="1">January</option>
                </select>

                <div className="more-filters" onClick={moreFilterDropdown}>

                    <Filter /> More Filters

                    <div
                        className={`dropdown-menu ${isExpanded ? "open" : ""}`}
                        onClick={(e) => e.stopPropagation()} //Prevent closing when clicking inside
                    >
                        <div className="dropdown-menu-item">
                            <label className='input-label'>Accuracy</label>
                            <div className="input-container">
                                <input
                                    type="number"
                                    placeholder='Min. Acc.'
                                    value={tempMinAccuracy}
                                    onChange={(e) => setTempMinAccuracy(Number(e.target.value))}
                                />
                                <input
                                    type="number"
                                    placeholder='Max. Acc'
                                    value={tempMaxAccuracy}
                                    onChange={(e) => setTempMaxAccuracy(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="dropdown-menu-item">
                            <label className='input-label'>Points</label>
                            <div className="input-container">
                                <input
                                    type="number"
                                    placeholder='Min. pts.'
                                    value={tempMinPoints}
                                    onChange={(e) => setTempMinPoints(Number(e.target.value))}
                                />
                                <input
                                    type="number"
                                    placeholder='Max. pts'
                                    value={tempMaxPoints}
                                    onChange={(e) => setTempMaxPoints(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <button className='button_submit' onClick={() => { applyFilters(); setIsExpanded(false); }}>Apply filters</button>
                            <button className='button_submit' onClick={() => { resetFilters(); setIsExpanded(false); }}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="complete-ranking">
                <h3>Complete Ranking</h3>
                <p>All students ranked by points earned this month</p>
                <div className="student-plate">
                    {filteredStudents().slice(0, limit).map((student, index) => {
                        const perfData = month === "9" ? student.overall_performance : student.monthly_performance.find(m => m.month === monthMap[month]);

                        return (

                            <div
                                className={`student-item ${isHighlight() && (index === 0 || index === 1 || index === 2) ? "student-item-top-highlight" : ""
                                    }`}
                                key={student.id}
                            >

                                <div className="student-item-left">

                                    <div
                                        className={`rank ${index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : ""
                                            }`}
                                    >
                                        {isHighlight() && (index === 0 || index === 1 || index === 2) ? (
                                            <img
                                                src={
                                                    index === 0
                                                        ? trophy
                                                        : index === 1
                                                            ? silverMedal
                                                            : bronzeMedal
                                                }
                                                alt="Rank Icon"
                                            />
                                        ) : (
                                            `#${index + 1}`
                                        )}
                                    </div>



                                    <img src={student.image} alt="student" />

                                    <div className="student-details">
                                        <p className="name">{student.first_name} {student.last_name}</p>
                                        <p className="class">Class {student.class}</p>


                                        {isHighlight() && index === 0 && (
                                            <div className="stars">
                                                <img src={trophy} alt="trophy" />
                                                <img src={fire} alt="fire" />
                                                <img src={thunder2} alt="thunder" />

                                            </div>
                                        )}

                                        {isHighlight() && index === 1 && (
                                            <div className="stars">
                                                <img src={silverMedal} alt="trophy" />
                                                <img src={arm} alt="fire" />

                                            </div>
                                        )}
                                        {isHighlight() && index === 2 && (
                                            <div className="stars">
                                                <img src={bronzeMedal} alt="trophy" />
                                                <img src={flower} alt="fire" />

                                            </div>
                                        )}

                                        {isHighlight() && index === 3 && (
                                            <div className="stars">
                                                <Star1 />
                                                <img src={books} alt="fire" />

                                            </div>
                                        )}


                                        {isHighlight() && index === 4 && (
                                            <div className="stars">
                                                <Star1 />
                                                <img src={accuracy} alt="fire" />

                                            </div>
                                        )}
                                        {isHighlight() && index === 5 && (
                                            <div className="stars">
                                                <Star1 />
                                                <img src={startOrbit} alt="fire" />

                                            </div>
                                        )}
                                        {isHighlight() && index > 5 && (
                                            <div className="stars">
                                                <Star2 />
                                            </div>
                                        )}

                                        {(!isHighlight()) && (
                                            <div className="stars">
                                                <Star2 />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="student-item-right">
                                    <div className="item-right-top">
                                        <div className='point-box'>
                                            <span className='points-val'>{perfData.points}</span>
                                            <span className='points'>points</span>
                                        </div>

                                        <p
                                            className={`accuracy ${perfData.accuracy >= 90 ? "excellent" : perfData.accuracy >= 80 ? "good" : perfData.accuracy >= 70 ? "average" : "needs-improvement"} `}>{perfData.accuracy}%</p>

                                        <p className="chapters-completed"><Fire /> {perfData.chapters_completed}</p>
                                    </div>
                                    <div className="item-right-bottom">
                                        <div className="right-bottom-content"><Eye /> View</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchStudent;
