import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

const RatingChart = ({ ratings }) => {
    console.log(ratings)
    return (
        <div className="w-full h-[400px] bg-white p-16 rounded-2xl shadow ">
            <h2 className="text-2xl font-bold mb-5 text-center">
                Rating Distribution
            </h2>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ratings}>
                    <CartesianGrid strokeDasharray="33" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingChart;