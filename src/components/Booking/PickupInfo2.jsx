import React, { useState } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Search from '@mui/icons-material/Search'
import DropDown from './DropDown';
import DatePicker from './DatePicker';

const PickupInfo2 = () => {

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
            <div className="w-[60%] py-6 m-auto bg-white grid grid-cols-2 gap-5 lg:py-2 lg:w-full lg:flex lg:flex-row lg:items-center lg:rounded-full relative booking-item-nav-search" >
                <DropDown state={state} handleChange={handlePickup} label={'Pickup Location'} handleEdit={handleEdit} setState={setState} isFirst={true} />
                <DropDown state={state} handleChange={handleDropoff} label={'Dropoff Location'} handleEdit={handleEdit} setState={setState} />
                <DatePicker state={state} setState={setState} handleChange={handlePickupDate} handleEdit={handleEdit} label={'Pickup Date'} />

                <DropDown state={state} handleChange={handlePickupTime} label={'Pickup Time'} handleEdit={handleEdit} setState={setState} />
                <DatePicker state={state} setState={setState} handleChange={handleDropoffDate} handleEdit={handleEdit} label={'Dropoff Date'} />
                <DropDown state={state} handleChange={handleDropoffTime} label={'Dropoff Location'} handleEdit={handleEdit} setState={setState} isLast={true} />
                <div className="flex items-center relative location-bg h-[100%]">
                    <div className="booking-item cursor-pointer rounded-full bg-primary w-full h-[100%] p-9">
                        <div className="flex items-center">
                            <div className="flex flex-col w-full">
                                <div className="relative ">
                                    <Search sx={{ transform: "scale(2)", color: 'white' }} />
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