import React from "react";
import { Grid, Box } from "@mui/material";
import { MenuBar } from "./MenuBar";
import { Main } from "./Main/Main";
import { ProjectPeace } from "./ProjectPeace";

export const Dashboard = () => {

    return (
        <>
            <Box
                p={5}
                className='OuterBox'
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    className='InnerBox'
                >
                    <Grid
                        container
                        direction="row"
                        sx={{
                            bgcolor: 'var(--innerbgcolor)',
                            borderRadius: '25px'
                        }}
                        item
                        xs={12}
                        p={{ xs: 2, sm: 2, md: 3, lg: 4 }}
                    >

                        {/* Menu Bar */}
                        <Grid item xs={2} sm={1} md={1} lg={1} >
                            <MenuBar />
                        </Grid>

                        {/* Middle Part */}
                        <Grid
                            item
                            xs={10} sm={7} md={7.5} lg={8}
                            className='middle'
                            container
                            direction='row'
                            alignItems="flex-start"
                        >
                            <Main />
                        </Grid>

                        {/* project Peace */}
                        <Grid
                            item
                            xs={12} sm={4} md={3.5} lg={3}
                            container
                            justifyContent='center'
                            alignContent='flex-start'
                            className="project"
                        >
                            <ProjectPeace />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}