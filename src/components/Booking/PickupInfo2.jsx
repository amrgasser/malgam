import React, { useState } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DropDown from './DropDown';
import DatePicker from './DatePicker';
import SearchButton from './SearchButton';

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
            <div className="w-[80%] py-6 m-auto bg-white grid grid-cols-2 gap-5 justify-between place-items-center lg:gap-0  lg:py-0 lg:px-0 lg:w-full lg:flex lg:flex-row lg:items-center lg:rounded-full relative booking-item-nav-search" >
                <DropDown state={state} handleChange={handlePickup} label={'Pickup Location'} handleEdit={handleEdit} setState={setState} isFirst={true} />
                <DropDown state={state} handleChange={handleDropoff} label={'Dropoff Location'} handleEdit={handleEdit} setState={setState} />
                <DatePicker state={state} setState={setState} handleChange={handlePickupDate} handleEdit={handleEdit} label={'Pickup Date'} />

                <DropDown state={state} handleChange={handlePickupTime} label={'Pickup Time'} handleEdit={handleEdit} setState={setState} />
                <DatePicker state={state} setState={setState} handleChange={handleDropoffDate} handleEdit={handleEdit} label={'Dropoff Date'} />
                <DropDown state={state} handleChange={handleDropoffTime} label={'Dropoff Location'} handleEdit={handleEdit} setState={setState} isLast={true} />

                <SearchButton />
            </div>
        </LocalizationProvider >
    )
}

export default PickupInfo2