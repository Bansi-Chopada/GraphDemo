import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

export const SelectBox = ({ age, handleChange, options }) => {
    return (
        <>
            <FormControl >
                <Select
                    value={age}
                    onChange={handleChange}
                    sx={{
                        boxShadow: 'none',
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                    }}
                    className='select'
                >
                    {
                        options.map((option, index) => {
                            return (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </>
    )
}