
import React, { useState } from 'react'
import SummaryComponentDesktop from './SummaryComponentDesktop'
import SummaryButton from './SummaryButton'

const SummaryComponentMobile = ({ state, setState }) => {
    const [openSummary, setOpenSummary] = useState(false)
    const toggleOpenSummary = () => {
        setOpenSummary(!openSummary)
    }
    return (
        <>
            {openSummary && <div className='fixed top-[0] left-[0] w-[100vw] h-[100vh] bg-primary opacity-[0.2] z-39' onClick={toggleOpenSummary}></div>}
            <div className="summary-container-mobile fixed bottom-[0] left-[0] w-full lg:hidden bg-white rounded-lg z-40" style={{ borderTop: '5px solid rgb(99, 212, 204)' }}>
                {openSummary && <SummaryComponentDesktop isMobile={true} />
                }
                <div className="flex flex-col">
                    <div className="flex flex-col items-center p-5">
                        <div className="flex items-center justify-center cursor-pointer" onClick={toggleOpenSummary}>
                            <span >
                                <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                                    <title >162 arrow small up</title>
                                    <path d="M18,15.5a1,1,0,0,1-.707-.293l-4.586-4.586a1.021,1.021,0,0,0-1.414,0L6.707,15.207a1,1,0,0,1-1.414-1.414L9.879,9.207a3.073,3.073,0,0,1,4.243,0l4.585,4.586A1,1,0,0,1,18,15.5Z"></path>
                                </svg>
                            </span>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center w-full text-xl justify-between pr-4 pl-4 pb-0">
                                <h3 className="font-bold">Total price</h3>
                                <h3 className="font-bold">594 €</h3>
                            </div>
                            <div className="w-full flex flex-col pt-3 p-3">
                                <SummaryButton state={state} setState={setState} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SummaryComponentMobile