import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import Boy from '../../Assets/Boy1.png';
import MessageIcon from '@mui/icons-material/Message';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import AppsIcon from '@mui/icons-material/Apps';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import TelegramIcon from '@mui/icons-material/Telegram';
import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import { ManageDiv } from "../../Components/ManageDiv";
import { ImageSlider } from "../../Components/ImageSlider";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const ProjectPeace = () => {
    return (
        <>
            <Grid
                container
            >
                <Grid
                    item
                    xs={9}
                    sm={6}
                    md={6}
                    lg={6}
                    // xl={7}
                    container
                    justifyContent={{
                        xs: 'flex-end', sm: 'flex-start'
                    }}
                    alignContent='flex-start'
                    className="NeedHelpDiv"
                    mt={1}
                >
                    <Grid
                        container
                        justifyContent='flex-start'
                        alignContent='center'
                        className="help"
                        pl={{ xs: 1, sm: 1, md: 1, lg: 2 }}
                    >
                        <Typography>
                            Need Help?
                        </Typography>
                        <a href="#">
                            24/7 Support Center &nbsp;<ArrowForwardIcon />
                        </a>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={2.5}
                    sm={6}
                    md={6}
                    lg={6}
                    container
                    justifyContent='flex-end'
                >
                    <img className="boy" src={Boy} alt="boy" />
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                className='ProjectPeaceDiv'
                pb={3}
            >
                <Grid
                    item
                    xs={12}
                    p={{ xs: 2, sm: 1, md: 2, lg: 3 }}
                    container
                    direction='row'
                >
                    <Grid
                        item
                        xs={2} sm={3}
                        container
                        direction='row'
                        justifyContent='flex-start'
                        alignContent='center'
                        px={{ xs: 1, sm: 1, md: 0, lg: 0 }}
                    >
                        <Grid
                            className="projectLogo"
                        >
                            <MessageIcon />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={10} sm={9}
                        px={1}
                        container
                        direction='column'
                        justifyContent='flex-start'
                        alignContent='flex-start'
                    >
                        <Typography className="ProjectTitle">
                            Project Peace
                        </Typography>
                        <Typography className="lorem">
                            Lorem ipsum dolor sit
                        </Typography>
                    </Grid>

                    <Grid
                        pt={1}
                        container
                        justifyContent='center'
                        alignContent='center'
                        columnGap={2}
                    >
                        <Grid
                            container
                            justifyContent='center'
                            alignContent='center'
                            className="icons"
                        >
                            <EnergySavingsLeafIcon />
                        </Grid>
                        <Grid
                            container
                            justifyContent='center'
                            alignContent='center'
                            className="icons"
                        >
                            <AppsIcon />
                        </Grid>
                        <Grid
                            container
                            justifyContent='center'
                            alignContent='center'
                            className="icons"
                        >
                            <TelegramIcon />
                        </Grid>
                    </Grid>
                </Grid>

                <Divider variant="middle" />

                <Grid
                    item
                    xs={12}
                    pt={{ xs: 1, sm: 1.5, md: 2, lg: 3 }}
                    px={2}
                    container
                    direction='row'
                >
                    <Grid item xs={6}>
                        <Typography variant="p" className="FileManager">
                            File Manager
                        </Typography>
                    </Grid>
                    <Grid item xs={6}
                        container
                        justifyContent="flex-end"
                        columnGap={1}
                    >
                        <Button
                            className="AddButton"
                            size="small"
                            variant="contained"
                            startIcon={<AddIcon />}
                        >
                            Add
                        </Button>
                        <Button
                            size="small"
                            className="moreButton"
                        >
                            <MoreHorizIcon />
                        </Button>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction='row'
                    p={{ xs: 2, sm: 1, md: 2, lg: 2 }}
                    // pt={{ xs: 2, sm: 2, md: 2, lg: 3 }}
                    spacing={{ xs: 2, sm: 1, md: 2, lg: 2 }}
                    className='ManageDiv'
                >
                    <Grid
                        item
                        xs={6}
                        rowSpacing={2}
                        container
                        direction='column'
                    >
                        <Grid item>
                            <ManageDiv
                                color='var(--graphBarColor2)'
                                bgcolor='var(--purpleBgColor)'
                                icon={<FolderIcon />}
                                title='My Folder'
                                subtitle='created jan 4, 2020'
                            />
                        </Grid>
                        <Grid item>
                            <ManageDiv
                                color='var(--graphBarColor1)'
                                bgcolor='var(--blueBgColor)'
                                icon={<ImageIcon />}
                                title='Image JPG'
                                subtitle='created jan 4, 2020'
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        xs={6}
                        rowSpacing={2}
                        container
                        direction='column'
                    >
                        <Grid item>
                            <ManageDiv
                                color='var(--yelloColor)'
                                bgcolor='var(--yellowBgColor)'
                                icon={<DescriptionIcon />}
                                title='House Aggrement paper pdf'
                                subtitle='created jan 4, 2020'
                            />
                        </Grid>
                        <Grid item>
                            <ManageDiv
                                color='var(--redColor)'
                                bgcolor='var(--redBgColor)'
                                icon={<FolderIcon />}
                                title='Project- Reviews & Ratings'
                                subtitle='created jan 4, 2020'
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    xs={12}
                    p={2}
                    pt={{ xs: 0, sm: 1, md: 0 }}
                    container
                    direction='row'
                >
                    <Grid item xs={6}>
                        <Typography variant="p" className="FileManager">
                            Media
                        </Typography>
                    </Grid>
                    <Grid item xs={6}
                        container
                        justifyContent="flex-end"
                    >
                        <Button
                            size="small"
                            className="moreButton"
                        >
                            <MoreHorizIcon />
                        </Button>
                    </Grid>
                </Grid>

                <Grid
                    item
                    xs={12}
                    container
                    justifyContent='center'
                    alignContent='center'
                >
                    <ImageSlider />
                </Grid>
            </Grid>
        </>
    )
}