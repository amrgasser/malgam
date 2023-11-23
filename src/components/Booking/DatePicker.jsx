import React from 'react'

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const DatePicker = ({ label, setState, handleEdit, state, handleChange, myStep }) => {
    return (
        <div className="flex items-center relative">
            <div className=" cursor-pointer booking-item rounded-full">
                <div className={`flex items-center`}>
                    <div className="">
                        <div className="flex flex-col">

                            <label htmlfor="grid-state" className="block tracking-wide text-center text-gray-700 text-sm font-bold mb-1 cursor-pointer">{label}</label>
                            <div className="block appearance-none text-left text-sm leading-tight cursor-pointer">
                                {useWindowDimensions().width < 1200 ?
                                    <MobileDatePicker
                                        className='text-center'
                                        sx={{
                                            'input': {
                                                padding: '0',
                                                textAlign: 'center'
                                            },
                                            'fieldset': {
                                                border: 'none'
                                            }
                                        }}
                                        onChange={handleChange}
                                        closeOnSelect
                                        open={state.step == myStep}
                                        onOpen={() => handleEdit(myStep)}
                                        onClose={() => setState({ ...state, step: 6 })}
                                    />
                                    :
                                    <DesktopDatePicker
                                        sx={{
                                            'fieldset': {
                                                border: 'none'
                                            },
                                            'input': {
                                                padding: 0,
                                                width: '60%',
                                            },
                                            '.MuiInputBase-root': {
                                                justifyContent: 'center'
                                            }
                                        }}
                                        onChange={handleChange}
                                        open={state.step == myStep}
                                        onOpen={() => handleEdit(myStep)}
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