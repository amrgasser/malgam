import React from 'react'
import Car from '../../assets/card_images/new_car.png'
import CarEngine from '../../assets/card_images/car-engine.png'
import CarSeat from '../../assets/card_images/car-seat.png'
import Transmission from '../../assets/card_images/manual-transmission.png'
import Gas from '../../assets/card_images/gas-station.png'

const CarCard = ({ next }) => {
    return (
        <div className="flex flex-col items-center w-full justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={next}>

            <img className="rounded-t-lg w-[75%]" src={Car} alt="product image" />

            <div className="px-5 pb-5 flex flex-col align-center justify-center">
                <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white p-3">2020 Mercedes Benz e300</h5>
                <div className="grid grid-flow-row grid-cols-2 gap-4 p-4">
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={CarEngine} alt="" />
                        <p>200 HP</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={CarSeat} alt="" />
                        <p>5 seats</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={Transmission} alt="" />
                        <p>Automatic</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img className='h-4 w-4 mr-2' src={Gas} alt="" />
                        <p>30 MPG</p>
                    </div>
                </div>
                {/* <div class="flex items-center mt-2.5 mb-5">
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div> */}
                <div className="flex items-center justify-between mt-5">
                    {/* <span class="text-xl font-bold text-gray-900 dark:text-white">$ 50.0</span> */}
                    <a href="#" className="text-white w-full bg-black-gradient hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">$ 50.0</a>
                </div>
            </div>
        </div>
    )
}

export default CarCard