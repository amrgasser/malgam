import React from 'react'
import Car from '../../assets/card_images/new_car.png'
import CarEngine from '../../assets/card_images/car-engine.png'
import CarSeat from '../../assets/card_images/car-seat.png'
import Transmission from '../../assets/card_images/manual-transmission.png'
import Gas from '../../assets/card_images/gas-station.png'
const car = {
    brand: "Mercedes",
    model: "E300",
    year: 2020,
    transmission: 'Automatic',
    seats: 5,
    gas: 'Petrol',
    power: 200
}
const CarCard = ({ next, onClick }) => {

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg car-shadow p-2" onClick={next}>
            <img className="rounded-t-lg w-[75%]" src={Car} alt="product image" />
            <div className="px-5 pb-5 flex flex-col align-center justify-center">
                <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white p-3">{car.year}&nbsp;{car.brand}&nbsp;{car.model}</h5>
                <div className="grid grid-flow-row grid-cols-2 gap-4 p-4">
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={CarEngine} alt="" />
                        <p>{car.power} HP</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={CarSeat} alt="" />
                        <p>{car.seats} seats</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={Transmission} alt="" />
                        <p>{car.transmission}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={Gas} alt="" />
                        <p>30 MPG</p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-5 pointer-cursor" onClick={onClick}>
                    {/* <span class="text-xl font-bold text-gray-900 dark:text-white">$ 50.0</span> */}
                    <p className="text-white w-full bg-primary hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">$ 50.0</p>
                </div>
            </div>
        </div>
    )
}

export default CarCard