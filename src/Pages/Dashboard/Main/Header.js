import React, { useState } from "react";
import { Grid, IconButton, InputBase, Paper, Typography } from "@mui/material";
import { SelectBox } from "../../../Components/SelectBox";
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {

    const options = ['English', 'Gujrati', 'Hindi'];
    const [age, setAge] = useState(options[0]);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Grid
                item xs={12} sm={6} md={6} lg={6}
                container
                justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
                <Typography variant="subtitle1" className="heading">
                    Welcome to the Dashboard
                </Typography>
            </Grid>
            <Grid
                item
                xs={12} sm={6} md={6} lg={6}
                container
                direction="row"
                justifyContent={{ xs: 'center', md: 'flex-end' }}
                alignItems='center'
                mt={1}
            >
                <SelectBox
                    age={age}
                    handleChange={handleChange}
                    options={options}
                />
                <Paper
                    className="search"
                    elevation={0}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton
                        type="button"
                        sx={{ color: 'var(--menuactivecolor)' }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
        </>
    )
}