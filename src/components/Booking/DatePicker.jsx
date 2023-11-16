import React from 'react'

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const DatePicker = ({ label, setState, handleEdit, state, handleChange }) => {
    return (
        <div className="flex items-center relative">
            <div className=" cursor-pointer booking-item rounded-full w-full">
                <div className={`flex items-center`}>
                    <div className="">
                        <div className="flex flex-col w-full">

                            <label htmlfor="grid-state" className="block tracking-wide text-gray-700 text-sm font-bold mb-1 cursor-pointer">{label}</label>
                            <div className="block appearance-none text-left text-sm w-full leading-tight cursor-pointer">
                                {useWindowDimensions().width < 1200 ?
                                    <MobileDatePicker
                                        sx={{
                                            'input': {
                                                padding: '0',
                                            },
                                            'fieldset': {
                                                border: 'none'
                                            }
                                        }}
                                        onChange={handleChange}
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
                                        onChange={handleChange}
                                        open={state.step == 5}
                                        onOpen={() => handleEdit(5)}
                                        onClose={() => setState({ ...state, step: 6 })}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {useWindowDimensions().width >= 1200 && <div className="booking-item-border"></div>}
        </div>
    )
}

export default DatePicker