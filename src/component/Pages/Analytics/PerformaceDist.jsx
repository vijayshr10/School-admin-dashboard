import Icons from "../../../Assets/Icons";

import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from "recharts";




const PerformaceDist = ({ data }) => {

    //  for fectichngdata from api we ca use usestate and useffect for this
    // forr better approach

    // const { students } = data;
    // const [excellent, setExcellent] = useState(0);
    // const [good, setGood] = useState(0);
    // const [needsImprovement, setNeedsImprovement] = useState(0);

    // useEffect(() => {
    //     let exc = 0, gd = 0, ni = 0;

    //     students.forEach((student) => {
    //         const accuracy = student.performance?.points ?? 0;

    //         if (accuracy >= 85) exc++;
    //         else if (accuracy >= 70) gd++;
    //         else ni++;
    //     });

    //     setExcellent(exc);
    //     setGood(gd);
    //     setNeedsImprovement(ni);
    // }, [students]);


    // ------------------------------------------------------------


    // here using mock data for charts 

    const chartData = [
        { name: "Excellent (85-100%)", value: 93 },
        { name: "Good (70-84%)", value: 144 },
        { name: "Needs Improvement (<70%)", value: 63 },
    ];

    const COLORS = ["#2ecc71", "#f39c12", "#e74c3c"];

    const { Circle } = Icons;




    return (
        <div className='chart-tile'>
            <p className="chart-tile-heading">
                Student Performance Distribution
            </p>

            <p className="chart-tile-sub-heading">
                Overall accuracy breakdown accross all students
            </p>

            <div style={{ width: "100%", height: "60vh" }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            // fill="#8884d8"
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>


            </div>
            <p className="one"><Circle /> {`Excellent (85-100%)`}</p>
            <p className="two"><Circle /> {`Good (70-84%)`}</p>
            <p className="three"><Circle /> {`Needs Improvement (<70%)`}</p>

        </div>
    )
}

export default PerformaceDist