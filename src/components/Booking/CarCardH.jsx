import React from 'react'
import Car from '../../assets/images/download.jpeg'


const CarCardH = () => {
    return (
        <a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Car} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2020 Mercedes Benz e300</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div class="flex items-center justify-between mt-5">
                    <span class="text-xl font-bold text-gray-900 dark:text-white">$ 50.0</span>
                    {/* <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
                </div>
            </div>
        </a>
    )
}

export default CarCardH