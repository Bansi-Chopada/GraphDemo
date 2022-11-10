import React from "react";
import { Grid } from "@mui/material";

export const MenuDiv = ({ className, icon, title }) => {
    return (
        <>
            <Grid
                className={className}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                item
            >
                {icon}
                {title}
            </Grid>
        </>
    )
}