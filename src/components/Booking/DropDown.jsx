import React from 'react'

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
const locations = ['Liverpool', 'Manchester', 'Yorkshire']

const DropDown = ({ label, handleEdit, setState, handleChange, state, isLast = false, isFirst = false }) => {
    return (
        <div className="flex items-center relative location-bg">
            <div className="booking-item cursor-pointer rounded-full w-full">
                <div className="flex items-center pl-8">
                    <div>
                        <div className="flex flex-col w-full">
                            <label htmlfor="grid-state" className="block tracking-wide text-gray-700 text-sm font-bold">{label}</label>
                            <div className="relative">
                                <FormControl sx={{ m: 1, width: 140, margin: 0 }} size="small">
                                    <Select
                                        // native
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        // value={state.pickupLoc}
                                        value={state.pickupLoc}
                                        label="Pick up"
                                        onOpen={() => handleEdit(1)}
                                        onChange={handleChange}
                                        onClose={() => setState({ ...state, step: 2 })}
                                        sx={{
                                            'fieldset': {
                                                border: 'none'
                                            },
                                            'md:div': {
                                                padding: 0
                                            },
                                            'md:MuiSelect-select': {
                                                padding: 0
                                            }
                                        }}

                                    >
                                        {locations.map((loc) => <MenuItem key={loc} value={loc}>{loc}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    {!isLast && <div className="booking-item-border"></div>}
                </div>
            </div>
        </div>
    )
}

export default DropDown