import React from 'react'

const SummaryButton = ({ state, setState }) => {
    const handleClick = () => {
        setState({ ...state, step: state.step + 1 })
    }
    return (
        <div role="button" onClick={handleClick} className="w-full flex hover:shadow-center justify-center text-center bg-primary border border-primary text-white font-semibold py-3 px-8 rounded-2xl focus:outline-none hover:bg-primary-100 mt-6"> Continue </div>
    )
}

export default SummaryButton