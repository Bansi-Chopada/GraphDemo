import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const PieGraph = () => {

    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [pieHeight, setPieHeight] = useState();

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, []);

    useEffect(() => {
        if (windowSize.innerWidth >= 1200) {
            setPieHeight(250);
        } else if (windowSize.innerWidth >= 1100) {
            setPieHeight(200);
        } else if (windowSize.innerWidth >= 1000) {
            setPieHeight(180);
        } else if (windowSize.innerWidth >= 800) {
            setPieHeight(170);
        } else if (windowSize.innerWidth >= 700) {
            setPieHeight(170);
        } else if (windowSize.innerWidth >= 600) {
            setPieHeight(160);
        } else if (windowSize.innerWidth >= 500) {
            setPieHeight(140);
        } else if (windowSize.innerWidth >= 400) {
            setPieHeight(140);
        } else if (windowSize.innerWidth >= 300) {
            setPieHeight(130);
        }

    }, [windowSize]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    const pieData = [
        {
            "name": "Chrome",
            "value": 68.85
        },
        {
            "name": "Firefox",
            "value": 7.91
        },
        {
            "name": "Edge",
            "value": 6.85
        },
        {
            "name": "Internet Explorer",
            "value": 6.14
        },
        {
            "name": "Others",
            "value": 10.25
        }
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };

    return (
        <ResponsiveContainer
            height={pieHeight}
            width="100%"
            className='pieHeight'
        >
            <PieChart className='pieChart'>
                <Pie
                    data={pieData}
                    color="#000000"
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    fill="#8884d8"
                    className="bbb"
                >
                    {
                        pieData.map((entry, index) =>
                            <Cell
                                key={`cell-${index}`}
                                // style={{
                                //     filter: `drop-shadow(0px 0px 5px ${COLORS[index % COLORS.length]
                                //         }`
                                // }}
                                fill={COLORS[index % COLORS.length]}
                            />
                        )
                    }
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    )

}
