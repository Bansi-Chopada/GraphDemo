import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export const TimelineDiv = () => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    return (
        <>
            <Grid
                item
                xs={12}
                mt={{ xs: 3, sm: 3, md: 5, lg: 5 }}
                pb={3}
                className="timelineDiv"
            >
                <Grid
                    item
                    xs={12}
                    p={3}
                    container
                    direction='row'
                    className="timelineHeader"
                >
                    <Grid item xs={6} sm={6} md={6}>
                        <Typography variant="p" className="timeline">
                            Project Timeline
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}
                        container
                        justifyContent="flex-end"
                        columnGap={{ xs: 1, sm: 1, md: 2, lg: 2 }}
                    >
                        <Button
                            className="AddProjectButton"
                            size="small"
                            variant="contained"
                            startIcon={<AddIcon />}
                        >
                            Add Project
                        </Button>
                        <Button
                            size="small"
                            className="moreButton"
                        >
                            <MoreHorizIcon />
                        </Button>
                    </Grid>
                </Grid>

                <Grid className="progressDiv">
                    <Grid item xs={12}
                        pt={{ xs: 0, sm: 0, md: 1, lg: 1 }}
                        px={{ xs: 2, sm: 2, md: 4, lg: 4 }}
                    >
                        <Typography className="day">
                            Monday
                        </Typography>
                        <Divider className="divider" variant="inset" />
                    </Grid>
                    <Grid item xs={12}
                        container direction='row'
                        columnGap={{ xs: 1, md: 1, lg: 2 }}
                        pl={{ xs: 11, sm: 11, md: 13, lg: 13 }}
                    >
                        <BorderLinearProgress className="progressBar" variant="determinate" value={100} />
                        <BorderLinearProgress className="progressBar" variant="determinate" value={100} />
                        <BorderLinearProgress className="progressBar" variant="determinate" value={100} />
                    </Grid>
                    <Grid item xs={12}
                        pt={{ xs: 0, sm: 0, md: 1, lg: 1 }}
                        px={{ xs: 2, sm: 2, md: 4, lg: 4 }}
                    >
                        <Typography className="day">
                            Tuesday
                        </Typography>
                        <Divider className="divider" variant="inset" />
                    </Grid>
                    <Grid item xs={12}
                        container direction='row'
                        columnGap={{ xs: 1, md: 1, lg: 2 }}
                        pl={{ xs: 11, sm: 11, md: 13, lg: 13 }}
                    >
                        <BorderLinearProgress className="progressBar" variant="determinate" value={100} />
                        <BorderLinearProgress className="progressBar" variant="determinate" value={100} />
                        <BorderLinearProgress className="progressBar" variant="determinate" value={100} />
                    </Grid>
                    <Grid item xs={12}
                        pt={{ xs: 0, sm: 0, md: 1, lg: 1 }}
                        px={{ xs: 2, sm: 2, md: 4, lg: 4 }}
                    >
                        <Typography className="day">
                            Wednesday
                        </Typography>
                        <Divider className="divider" variant="inset" />
                    </Grid>
                    <Grid item xs={12}
                        container direction='row'
                        columnGap={{ xs: 1, md: 1, lg: 2 }}
                        pl={{ xs: 11, sm: 11, md: 13, lg: 13 }}
                    >
                        <BorderLinearProgress className="progressBar" variant="determinate" value={100} />
                        <BorderLinearProgress className="progressBar" variant="determinate" value={100} />
                        <BorderLinearProgress className="progressBar" variant="determinate" value={100} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}