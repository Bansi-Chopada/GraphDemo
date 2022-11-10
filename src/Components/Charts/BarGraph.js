import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const data = [
    {
        name: "Jan",
        uv: 4000,
        pv: 2400,
    },
    {
        name: "Feb",
        uv: 3000,
        pv: 1398,
    },
    {
        name: "Mar",
        uv: 2000,
        pv: 9800,
    },
    {
        name: "Apr",
        uv: 2780,
        pv: 3908,
    },
    {
        name: "May",
        uv: 1890,
        pv: 4800,
    },
    {
        name: "Jun",
        uv: 2390,
        pv: 3800,
    },

];

export const BarGraph = () => {
    return (
        <BarChart
            width={550}
            height={250}
            data={data}
            className='Charts'
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="pv" fill="var(--graphBarColor1)" radius={6} />
            <Bar dataKey="uv" fill="var(--graphBarColor2)" radius={6} />

        </BarChart>
    );
}








