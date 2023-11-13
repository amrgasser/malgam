import React from 'react'

const PickupInfo2 = () => {
    return (
        <div class="w-f ull flex bg-white flex-col md:flex-row items-center rounded-full relative booking-item-nav-search">
            <div class="flex items-center relative location-bg" style={{ flex: "2 0 0%" }}>
                <div class="booking-item cursor-pointer rounded-full w-full pr-2">
                    <div class="flex items-center">
                        <div class="flex flex-col w-full pr-2 px-8 mb-1">
                            <label for="grid-state" class="block tracking-wide text-gray-700 text-sm font-bold mb-1">Location</label>
                            <div class="relative"><button class="block appearance-none text-left text-sm w-full leading-tight focus:outline-none"><span>
                                Where are you going?
                                &nbsp;
                            </span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="booking-item-border"></div>
            {/* <div class="flex w-full bg-white rounded-full" style={{ flex: "1.5 0 0%" }}> */}
            <div class="flex-1 relative w-full cursor-pointer booking-item pick-up rounded-full">
                <div class="w-full px-8 py-4 flex items-center">
                    <div>
                        <label for="grid-state" class="block tracking-wide text-gray-700 text-sm font-bold mb-1 cursor-pointer">Pick-up Date</label>
                        <div class="block appearance-none text-left text-sm w-full leading-tight cursor-pointer">
                            <div class="testing-width mt-1"><span>
                                Add dates
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="booking-item-border"></div>
            <div class="flex-1 relative w-full cursor-pointer booking-item pick-up rounded-full">
                <div class="w-full px-8 py-4 flex items-center">
                    <div>
                        <label for="grid-state" class="block tracking-wide text-gray-700 text-sm font-bold mb-1 cursor-pointer">Pick-up Time</label>
                        <div class="block appearance-none text-left text-sm w-full leading-tight cursor-pointer">
                            <div class="testing-width mt-1"><span>
                                Add time
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="booking-item-border"></div>
            <div class="flex-1 relative w-full cursor-pointer booking-item return rounded-full">
                <div class="w-full px-8 py-4 flex items-center">
                    <div>
                        <label for="grid-state" class="block tracking-wide text-gray-700 text-sm font-bold mb-1 cursor-pointer">Return Date</label>
                        <div class="block appearance-none text-left text-sm w-full leading-tight cursor-pointer">
                            <div class="testing-width mt-1"><span>
                                Add dates
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="booking-item-border"></div>
            <div class="flex-1 relative w-full cursor-pointer booking-item pick-up rounded-full">
                <div class="w-full px-8 py-4 flex items-center">
                    <div>
                        <label for="grid-state" class="block tracking-wide text-gray-700 text-sm font-bold mb-1 cursor-pointer">Return Time</label>
                        <div class="block appearance-none text-left text-sm w-full leading-tight cursor-pointer">
                            <div class="testing-width mt-1"><span>
                                Add time
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-width flex items-center justify-center p-2">
                <button type="button" class="block w-full bg-primary hover:bg-primary text-white booking-button" disabled="disabled">
                    <div class="booking-button-inner items-center">
                        <div class="flex items-center w-full">
                            <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="booking-button-icon text-white fill-current">
                                <title>17 search</title>
                                <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"></path>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
            {/* </div> */}
        </div>
    )
}

export default PickupInfo2