import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';

export const DropdownBox = ({ val, handleChange }) => {

    return (
        <>
            <FormControl className="ChartSelect" size="small" >
                <InputLabel id="demo-simple-select-label">Chart</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={val}
                    label="Chart"
                    onChange={handleChange}
                >
                    <MenuItem value='Bar Chart'>Bar Chart</MenuItem>
                    <MenuItem value='Pie Chart'>Pie Chart</MenuItem>
                    <MenuItem value='Line Chart'>Line Chart</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}