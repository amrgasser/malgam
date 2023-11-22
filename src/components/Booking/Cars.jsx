import React, { useState } from 'react'
import CarCard from './CarCard'
import SummaryContainer from './SummaryContainer'

const Cars = ({ state, setState }) => {
    const [loadCard, setloadCard] = useState(false)
    const showCarCard = () => {
        setloadCard(true)
    }
    return (
        <div className={`${"grid grid-flow-col grid-cols-1 gap-4 place-items-center items-start pl-5 pr-5"}`}>
            <div className="flex col-span-2">
                <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4 place-items-center'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, ind) => (
                        <CarCard onClick={showCarCard} key={ind} />
                    ))}
                </div>
            </div>
            <div className='relative'>
                {loadCard && <SummaryContainer state={state} setState={setState} />}
            </div>
        </div>
    )
}

export default Cars