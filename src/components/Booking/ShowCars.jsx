import React, { useEffect, useState } from 'react'
import styles from "../../style";
import NavbarBooking from './NavbarBooking'
import PaymentForm from './PaymentForm';
import Cars from './Cars';

const ShowCars = ({ next }) => {
    const [state, setState] = useState({
        step: 0
    })

    const steps = [<Cars state={state} setState={setState} />, <PaymentForm />]

    return (
        <div className="bg-gradient-custom w-full overflow-hidden">
            <div className={`w-full h-full min-h-[100vh] p-5 overflow-scroll transition ease-in-out`}>

                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <NavbarBooking step={state.step} />
                    </div>
                </div>
                {steps[state.step]}
            </div >
        </div>
    )
}

export default ShowCars