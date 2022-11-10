import React from "react";
import { Grid } from "@mui/material";
import { Logo } from "../../Components/Logo";
import { MenuDiv } from "../../Components/MenuDiv";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const MenuBar = () => {
    return (
        <>
            <Grid
                container
                direction='column'
                justifyContent='flex-start'
                gap={2}
            >
                <Logo />
                <MenuDiv
                    icon={<HomeOutlinedIcon />}
                    title='Home'
                    className='menuActiveDiv'
                />
                <MenuDiv
                    icon={<FolderOutlinedIcon />}
                    title='Files'
                    className='menuDiv'
                />
                <MenuDiv
                    icon={<InventoryOutlinedIcon />}
                    title='Listings'
                    className='menuDiv'
                />
                <MenuDiv
                    icon={<AccountCircleOutlinedIcon />}
                    title='Clients'
                    className='menuDiv'
                />
                <MenuDiv
                    icon={<SettingsOutlinedIcon />}
                    title='Settings'
                    className='menuDiv'
                />
            </Grid>
        </>
    )
}