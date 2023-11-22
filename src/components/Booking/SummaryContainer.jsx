import React from 'react'
import SummaryComponentDesktop from './SummaryComponentDesktop'
import SummaryComponentMobile from './SummaryComponentMobile'

const SummaryContainer = ({ state, setState }) => {
    return (
        <>
            <div className="hidden lg:block">
                <SummaryComponentDesktop state={state} setState={setState} />
            </div>
            <div className="block lg:hidden">
                <SummaryComponentMobile state={state} setState={setState} />
            </div>
        </ >
    )
}

export default SummaryContainer