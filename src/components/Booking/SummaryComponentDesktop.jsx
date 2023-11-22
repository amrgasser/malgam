import React from 'react'
import Car from '../../assets/card_images/new_car.png'
import SummaryButton from './SummaryButton'
import DateRangeIcon from '@mui/icons-material/DateRangeOutlined';
import ArrowForward from '@mui/icons-material/ArrowForward';


const SummaryComponentDesktop = ({ isMobile, state, setState }) => {
    return (
        <div className={`summary-container lg:block p-6 ${isMobile && 'px-8'} bg-white rounded-lg`}>
            <div className="summary rounded-lg">
                <div className="flex flex-col">
                    <div className="destination flex flex-col relative">

                    </div>
                    <div className="flex p-4 items-center justify-between mb-2" style={{ background: 'rgba(99, 211, 203, 0.08)' }}>
                        <div className="flex w-full justify-between">
                            <div className="flex items-center">
                                <DateRangeIcon />
                                <span >My dates</span>
                            </div>
                            <p className="text-primary text-lg ml-2 font-bold"> 21 days </p>
                        </div>
                    </div>
                    <div className="dates flex flex-col">
                        <div className="flex items-center">
                            <div className="w-full flex items-center justify-between">
                                <div className="text-left">
                                    <h3 className="font-bold text-lg">29 Nov 2023</h3>
                                    <span className="text-sm">16:30</span>
                                </div>
                                <ArrowForward />
                                <div className="text-left text-lg">
                                    <h3 className="font-bold">20 Dec 2023</h3>
                                    <span className="text-sm">17:30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 pb-0 flex flex-col">
                        <div className="flex items-center">
                            <img src={Car} className="w-[15rem]" />
                            <p className="ml-4 font-bold">Mercedes E-class</p>
                        </div>
                    </div>
                    {!isMobile &&
                        <div className="confirm flex-flex-col border-t">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold">Total price</h3>
                                <h3 className="font-bold">594 €</h3>
                            </div>
                            <SummaryButton state={state} setState={setState} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SummaryComponentDesktop