import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", engagement: 45, learning: 11 },
    { name: "Feb", engagement: 53, learning: 13 },
    { name: "Mar", engagement: 48, learning: 17 },
    { name: "Apr", engagement: 55, learning: 20 },
    { name: "May", engagement: 59, learning: 22 },
];

const colors = ["#5390f2", "#2ecc71"];

const EngagementChart = () => (
    <div className='chart-tile'>
        <p className="chart-tile-heading">
            Student Engagement Trends
        </p>

        <p className="chart-tile-sub-heading">
            Monthlhy engagement patterns and learning time

        </p>

        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 50, right: 50, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />

                {/* Primary Y-axis */}
                <YAxis yAxisId="left" orientation="left" />

                {/* Secondary Y-axis */}
                <YAxis yAxisId="right" orientation="right" />



                {/* Bar mapped to primary Y-axis */}
                <Bar yAxisId="left" dataKey="engagement" fill={colors[0]} />

                {/* Bar mapped to secondary Y-axis */}
                <Bar yAxisId="right" dataKey="learning" fill={colors[1]} />
            </BarChart>
        </ResponsiveContainer>

    </div>

);

export default EngagementChart;
