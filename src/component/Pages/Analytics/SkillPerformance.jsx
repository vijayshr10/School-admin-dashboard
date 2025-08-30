import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from "recharts";
import Icons from "../../../Assets/Icons";


const data = [
    { name: "Vocabulary", value: 82 },
    { name: "Grammar", value: 78 },
    { name: "Pronounciation", value: 76 },
    { name: "Listening", value: 85 },
    { name: "Speaking", value: 74 },

];

const dataImprovement = [
    { name: "Vocabulary", value: 5 },
    { name: "Grammar", value: 8 },
    { name: "Pronounciation", value: 12 },
    { name: "Listening", value: 3 },
    { name: "Speaking", value: 15 },

];

const colors = ["#5290f3", "#45c191", "#eeab47", "#9f7bf5", "#ec6764"];

const SkillPerformance = () => {

    const { Circle } = Icons;

    return (
        <div className='chart-tile'>
            <p className="chart-tile-heading">
                Average Performance by Skill Area
            </p>

            <p className="chart-tile-sub-heading">
                Individual skill performance metrics and improvements
            </p>

            <div className="row-fill-container">

                {data.map((item, index) => (
                    <div className="row" key={index}>
                        <div className="label">
                            <p className='item-name'>{item.name}</p>
                            <p className='item-value'>{item.value}%</p>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${item.value}%`, backgroundColor: colors[index] }}
                            ></div>
                        </div>
                    </div>
                ))}

            </div>

            <div className="skill-bar-chart">
                <ResponsiveContainer  width={"100%"} height={300}>
                    <BarChart data={data}
                        margin={{ top: 10, left:-10, right:10, bottom: 60 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name"
                            angle={-45}
                            textAnchor="end"
                            interval={0} // Show all labels 
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]} />
                            ))}
                        </Bar>
                    </BarChart>

                </ResponsiveContainer>

            </div>

            <div className="month-over-improvement">
                <p className='heading'>Month-over-month Improvement</p>
                <div className="skill-plate">
                    {dataImprovement.map((item, index) => (
                    <div className="skill-tile" key={index}>
                        <p className='item-name'>{item.name}</p>
                        <p className={`item-value ${item.value < 0 ? "red" : "green"}`}>
                            {item.value > 0 ? `+${item.value}%`:`${item.value}%`} <Circle />
                        </p>
                    </div>
                ))}


                </div>
                


            </div>





        </div>
    )
}

export default SkillPerformance