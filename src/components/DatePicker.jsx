import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(new Date().getDay() + 1)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    return (
        <div className="mt-5">
            <Datepicker value={value} onChange={handleValueChange} />
        </div>
    )
}

export default DatePicker