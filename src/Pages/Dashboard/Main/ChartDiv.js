import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { DropdownBox } from "../../../Components/DropdownBox";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { LineGraph } from "../../../Components/Charts/LineGraph";
import { BarGraph } from "../../../Components/Charts/BarGraph";
import { PieGraph } from "../../../Components/Charts/PieGraph";

export const ChartDiv = () => {

    const [val, setVal] = useState('Bar Chart');
    const [chart, setChart] = useState('Bar Chart');

    const handleChange = (event) => {
        setVal(event.target.value);
    };

    return (
        <>
            <Grid item
                xs={12} sm={12} md={12} lg={12}
                mt={{ xs: 2, sm: 2, md: 1, lg: 3 }}
                container
                direction='row'
                className="SalesDiv"
            >
                <Grid item xs={2} sm={3} md={3} lg={3} >
                    <b className="sales">
                        Sales
                    </b>
                </Grid>
                <Grid
                    item
                    xs={10} sm={9} md={9} lg={9}
                    container
                    direction="row"
                    justifyContent="center"
                    alignContent='center'
                >
                    <Grid
                        item
                        xs={6}
                        lg={8}
                        container
                        direction="row"
                        justifyContent='flex-end'
                        alignContent='center'
                    >
                        <DropdownBox
                            val={val}
                            handleChange={handleChange}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        lg={4}
                        container
                        direction="row"
                        alignContent='center'
                        justifyContent='flex-end'
                        columnGap={{ xs: 0.6, md: 1, lg: 2 }}
                        className='monthDiv'
                    >
                        <Grid
                            className="leftArrow"
                            container
                            alignContent='center'
                            justifyContent='center'
                        >
                            <KeyboardArrowLeftIcon />
                        </Grid>
                        <Typography className="month">
                            January, 2020
                        </Typography>
                        <Grid
                            className="rightArrow"
                            container
                            alignContent='center'
                            justifyContent='center'
                            onClick={() => {
                                setChart(val);
                            }}
                        >
                            <KeyboardArrowRightIcon />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}
                mt={{ xs: 2, sm: 2, md: 3, lg: 3 }}
                className="ChartDiv"
            >
                <Grid
                    container
                    direction='row'
                >
                    <Grid
                        container
                        direction={{ xs: 'row', sm: 'row', md: 'column', lg: 'column' }}
                        item
                        xs={12} sm={12} md={4} lg={2.5}
                        alignContent='flex-start'
                        columnGap={{ xs: 2, sm: 5 }}
                    >
                        <Grid>
                            <b className="amount">
                                $21,800/=
                            </b>
                            <Typography className="upArrowLine">
                                <span><MovingOutlinedIcon />+18%</span> than Last month
                            </Typography>
                        </Grid>

                        <Grid
                            className="info"
                            mt={{ xs: 0, sm: 0, md: 3, lg: 6 }}
                        >
                            <Grid
                                container
                                direction='row'
                                alignItems='center'
                            >
                                <span className="firstCircleIcon"><CircleIcon /></span>&nbsp;
                                <p>Last month</p>
                            </Grid>
                            <Grid
                                container
                                direction='row'
                                alignItems='center'
                            >
                                <span className="SecondCircleIcon"><CircleIcon /></span>&nbsp;
                                <p>Running month</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        pt={{ xs: 2, sm: 2, md: 0, lg: 0 }}
                        item
                        xs={12} sm={12} md={8} lg={9.5}
                        container
                        justifyContent={{ xs: 'center', sm: 'center', md: 'flex-end' }}
                    >
                        {
                            chart === 'Bar Chart' ? <BarGraph /> : null ||
                                chart === 'Pie Chart' ? <PieGraph /> : null ||
                                    chart === 'Line Chart' ? <LineGraph /> : null
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}