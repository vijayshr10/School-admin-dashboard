import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Class 1", students: 35 },
  { name: "Class 2", students: 32 },
  { name: "Class 3", students: 28 },
  { name: "Class 4", students: 30 },
  { name: "Class 5", students: 25 },
  { name: "Class 6", students: 27 },
  { name: "Class 7", students: 33 },
  { name: "Class 8", students: 34 },
];

const Enrollment = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" fill="url(#colorGradient)" radius={[5, 5, 0, 0]} />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4facfe" stopOpacity={0.8} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Enrollment;
