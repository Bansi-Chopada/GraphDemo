import React from "react";
import { Grid, Typography } from "@mui/material";
import homeIcon from '../Assets/homeIcon.png';

export const Logo = () => {
    return (
        <>
            <Grid
                container
                className="logoDiv"
                direction="column"
            >
                <img className="homeIcon" src={homeIcon} alt="" />
                <Typography>
                    MakeHome
                </Typography>
            </Grid>
        </>
    )
}