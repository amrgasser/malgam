import React, { useState } from 'react'
import PickupInfo from './Booking/pickUpInfo'
import styles, { layout } from "../style";
import Button2 from './Button2';
// import { useMultistepForm } from '../hooks/useMultistepForm';
import PaymentForm from './Booking/PaymentForm';
import ShowCars from './Booking/ShowCars';
import FormProgress from './Booking/FormProgress';

const Booking = () => {
    const [step, setStep] = useState(0)
    const next = () => {
        console.log(step);
        if (step < 3) setStep(step + 1);
    }

    const prev = () => {
        if (step > 0) setStep(step - 1);
    }

    const steps = [<PickupInfo next={next} prev={prev} />, <ShowCars next={next} prev={prev} />, <PaymentForm next={next} prev={prev} />]

    return (
        <section id="booking" className={` flex flex-col justify-between bg-gray-100 space-between content-center ${styles.paddingY} min-h-[75vh] max-h-[95vh] shadow-xl mb-10`}>
            <FormProgress />
            {/* <div className="container flex-col p-5"> */}
            {steps[step]}
            <div className="flex flex-row justify-between container pt-3 pl-3 pr-3">
                <Button2 text="Back" onClick={prev} />
                <Button2 text="Next" onClick={next} />
            </div>
            {/* </div> */}
        </section>
    )
}

export default Booking