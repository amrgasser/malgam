import React, { useState } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useWindowDimensions from '../../hooks/useWindowDimensions';


const locations = ['Liverpool', 'Manchester', 'Yorkshire']
const PickupInfo2 = () => {
    const dimensions = useWindowDimensions();

    const [state, setState] = useState({
        step: 0
    })
    const handleEdit = (num) => {
        setState({ ...state, step: num })
    }
    const handlePickup = (e) => {
        const loc = e.target.value
        console.log(loc);
        setState({
            ...state,
            step: 2,
            pickupLoc: loc
        })
    }
    const handleDropoff = (e) => {
        const loc = e.target.value
        // console.log(loc);
        setState({
            ...state,
            step: 3,
            dropoffLoc: loc
        })
    }
    const handlePickupDate = (e) => {
        setState({
            ...state,
            step: 4,
            pickupDate: e
        })
    }
    const handlePickupTime = (e) => {
        const time = e.target.value
        setState({
            ...state,
            step: 5,
            pickupTime: time
        })
    }
    const handleDropoffDate = (e) => {
        setState({
            ...state,
            step: 6,
            dropoffDate: e
        })
    }
    const handleDropoffTime = (e) => {
        const time = e.target.value
        setState({
            ...state,
            step: 7,
            dropoffTime: time
        })
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            < div className="w-[60%] py-6 m-auto bg-white grid grid-cols-2 gap-5 lg:py-0 lg:w-full lg:flex lg:flex-row lg:items-center lg:rounded-full relative booking-item-nav-search" >
                <div className="flex items-center relative location-bg">
                    <div className="booking-item cursor-pointer rounded-full w-full pr-2">
                        <div className="flex items-center">
                            <div className="flex flex-col w-full pr-2 px-8 ">
                                <label htmlfor="grid-state" className="block tracking-wide text-gray-700 text-sm font-bold">Pick-up Location</label>
                                <div className="relative">
                                    <FormControl sx={{ m: 1, width: 140, margin: 0 }} size="small">
                                        {/* <InputLabel id="demo-select-small-label">Location</InputLabel> */}
                                        <Select
                                            // native
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            // value={state.pickupLoc}
                                            value={state.pickupLoc}
                                            label="Pick up"
                                            onOpen={() => handleEdit(1)}
                                            onChange={handlePickup}
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
                    </div>
                    <div className="lg:booking-item-border"></div>
                </div>
                <div className="flex items-center relative location-bg">
                    <div className="booking-item cursor-pointer rounded-full w-full pr-2">
                        <div className="flex items-center">
                            <div className="flex flex-col w-full pr-2 px-8 ">
                                <label htmlfor="grid-state" className="block tracking-wide text-gray-700 text-sm font-bold">Drop-off Location</label>
                                <div className="relative">
                                    <FormControl sx={{ m: 1, width: 140, margin: 0 }} size="small">
                                        {/* <InputLabel id="demo-select-small-label">Location</InputLabel> */}
                                        <Select
                                            // native
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            // value={state.pickupLoc}
                                            value={state.dropoffLoc}
                                            label="Pick up"
                                            onChange={handleDropoff}
                                            onOpen={() => handleEdit(3)}
                                            open={state.step === 2}
                                            onClose={() => setState({ ...state, step: 3 })}
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
                    </div>
                    <div className="lg:booking-item-border"></div>
                </div>
                {/* <div className="flex w-full bg-white rounded-full" style={{ flex: "1.5 0 0%" }}> */}
                <div className="flex flex-row relative  cursor-pointer booking-item pick-up rounded-full">
                    <div className="w-full px-8 lg:py-4 flex items-center">
                        <div>
                            <label htmlfor="grid-state" className="block tracking-wide text-gray-700 text-sm font-bold mb-1 cursor-pointer">Pick-up Date</label>
                            <div className="block appearance-none text-left text-sm w-full leading-tight cursor-pointer">
                                {/* <div className="testing-width mt-1"><span>
                                    Add dates
                                </span>
                                </div> */}
                                {dimensions.width < 1200 ?

                                    <MobileDatePicker
                                        sx={{
                                            padding: 0,

                                            'input': {
                                                padding: '0',
                                                border: 'none'
                                            },
                                            'fieldset': {
                                                border: 'none'
                                            }
                                        }}
                                        open={state.step == 3}
                                        onOpen={() => setState({ ...state, step: 3 })}
                                        onClose={() => setState({ ...state, step: 4 })}
                                        closeOnSelect
                                        onChange={handlePickupDate}
                                    />
                                    :

                                    <DesktopDatePicker
                                        sx={{
                                            'input': {
                                                padding: '0',
                                            },
                                            'fieldset': {
                                                border: 'none'
                                            }
                                        }}
                                        open={state.step == 3}
                                        onOpen={() => setState({ ...state, step: 3 })}
                                        onClose={() => setState({ ...state, step: 4 })}
                                        closeOnSelect
                                        onChange={handlePickupDate}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="lg:booking-item-border"></div>
                </div>
                <div className="flex items-center relative location-bg">
                    <div className="booking-item cursor-pointer rounded-full w-full pr-2">
                        <div className="flex items-center">
                            <div className="flex flex-col w-full pr-2 px-8 ">
                                <label htmlfor="grid-state" className="block tracking-wide text-gray-700 text-sm font-bold">Pick-up Time</label>
                                <div className="relative">
                                    <FormControl sx={{ m: 1, width: 140, margin: 0 }} size="small">
                                        {/* <InputLabel id="demo-select-small-label">Location</InputLabel> */}
                                        <Select
                                            // native
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            // value={state.pickupLoc}
                                            value={state.dropoffLoc}
                                            label="Pick up"
                                            onChange={handlePickupTime}
                                            open={state.step == 4}
                                            onOpen={() => handleEdit(4)}
                                            onClose={() => setState({ ...state, step: 5 })}

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
                                            {/* <MenuItem value="">
                                                None
                                            </MenuItem> */}
                                            {locations.map((loc) => <MenuItem key={loc} value={loc}>{loc}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:booking-item-border"></div>
                </div>
                <div className="flex flex-row relative cursor-pointer booking-item pick-up rounded-full">
                    <div className="w-full px-8 lg:py-4 flex items-center">
                        <div>
                            <label htmlfor="grid-state" className="block tracking-wide text-gray-700 text-sm font-bold mb-1 cursor-pointer">Drop-off Date</label>
                            <div className="block appearance-none text-left text-sm w-full leading-tight cursor-pointer">
                                {dimensions.width < 1200 ?
                                    <MobileDatePicker
                                        sx={{
                                            'input': {
                                                padding: '0',
                                                border: 'none'
                                            },
                                            'fieldset': {
                                                border: 'none'
                                            }
                                        }}
                                        onChange={handleDropoffDate}
                                        closeOnSelect
                                        open={state.step == 5}
                                        onOpen={() => handleEdit(5)}
                                        onClose={() => setState({ ...state, step: 6 })}
                                    />
                                    :
                                    <DesktopDatePicker
                                        sx={{
                                            'fieldset': {
                                                border: 'none'
                                            },
                                            'input': {
                                                padding: 0
                                            }
                                        }}
                                        onChange={handleDropoffDate}
                                        open={state.step == 5}
                                        onOpen={() => handleEdit(5)}
                                        onClose={() => setState({ ...state, step: 6 })}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="booking-item-border"></div>
                </div>
                <div className="flex items-center relative location-bg">
                    <div className="booking-item cursor-pointer rounded-full w-full pr-2">
                        <div className="flex items-center">
                            <div className="flex flex-col w-full pr-2 px-8 ">
                                <label htmlfor="grid-state" className="block tracking-wide text-gray-700 text-sm font-bold">Return Time</label>
                                <div className="relative">
                                    <FormControl sx={{ m: 1, width: 140, margin: 0 }} size="small">
                                        {/* <InputLabel id="demo-select-small-label">Location</InputLabel> */}
                                        <Select
                                            // native
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            // value={state.pickupLoc}
                                            value={state.dropoffLoc}
                                            label="Pick up"
                                            onChange={handleDropoffTime}
                                            onOpen={() => handleEdit(6)}
                                            onClose={() => setState({ ...state, step: 1 })}
                                            open={state.step == 6}
                                            sx={{
                                                'fieldset': {
                                                    border: 'none'
                                                },
                                                'md:div': {
                                                    padding: 0
                                                }
                                            }}
                                        >
                                            {/* <MenuItem value="">
                                                None
                                            </MenuItem> */}
                                            {locations.map((loc) => <MenuItem key={loc} value={loc}>{loc}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LocalizationProvider >
    )
}

export default PickupInfo2