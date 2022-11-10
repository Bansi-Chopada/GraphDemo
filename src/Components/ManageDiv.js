import React from "react";
import { Grid, Typography } from "@mui/material";

export const ManageDiv = ({ bgcolor, color, icon, title, subtitle }) => {
    return (
        <>
            <Grid
                p={{ xs: 1, sm: 1, md: 1, lg: 2 }}
                sx={{
                    bgcolor: bgcolor,
                    borderRadius: '10px',
                    color: color,
                    cursor: 'pointer'
                }}
            >
                {icon}
                <Typography
                    pt={0.5}
                    className="ManageDivTitle"
                    sx={{ color: 'black' }}
                >
                    {title}
                </Typography>
                <Typography className="created">
                    {subtitle}
                </Typography>
            </Grid>
        </>
    )
}