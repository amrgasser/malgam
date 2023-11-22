import React from 'react'
import Car from '../../assets/card_images/new_car.png'
import SummaryButton from './SummaryButton'

const SummaryComponentDesktop = ({ isMobile, state, setState }) => {
    return (
        <div className={`summary-container lg:block p-6 ${isMobile && 'px-8'} bg-white rounded-lg`}>
            <div className="summary rounded-lg">
                <div className="flex flex-col">
                    <div className="destination flex flex-col relative">

                    </div>
                    <div className="flex p-4 items-center justify-between" style={{ background: 'rgba(99, 211, 203, 0.08)' }}>
                        <div className="flex w-full justify-between">
                            <div className="flex items-center">
                                <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-primary text-lg fill-current w-4 h-4 mr-1">
                                    <title >130 calendar</title>
                                    <path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z"></path>
                                    <circle cx="12" cy="15" r="1.5"></circle>
                                    <circle cx="7" cy="15" r="1.5"></circle>
                                    <circle cx="17" cy="15" r="1.5"></circle>
                                </svg>
                                <span >My dates</span>
                            </div>
                            <div><small className="text-primary text-lg ml-2 font-bold"> 21 days </small></div>
                        </div>
                    </div>
                    <div className="dates flex flex-col">
                        <div className="flex items-center">
                            <div className="w-full flex items-center justify-between">
                                <div className="text-left">
                                    <h3 className="font-bold text-lg">29 Nov 2023</h3>
                                    <span className="text-sm">16:30</span>
                                </div>
                                <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-primary fill-current mr-2 w-10 h-10 hidden md:inline-block">
                                    <title >158 arrow right small</title>
                                    <path d="M13.121,6.293a1,1,0,0,0,0,1.414L16.413,11,6,11.007a1,1,0,1,0,0,2L16.414,13l-3.293,3.293a1,1,0,1,0,1.414,1.414l3.586-3.585a3,3,0,0,0,0-4.243L14.535,6.293A1,1,0,0,0,13.121,6.293Z"></path>
                                </svg>
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
                    {!isMobile && <div className="confirm flex-flex-col border-t">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold">Total price</h3>
                            <h3 className="font-bold">594 €</h3>
                        </div>
                        <SummaryButton state={state} setState={setState} />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default SummaryComponentDesktop