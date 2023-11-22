import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Search from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'

const SearchButton = ({ state }) => {
    return (
        <>
            {useWindowDimensions().width < 1200 ?

                <div className="div absolute bottom-[-10px] flex">
                    <Link to={'/booking'} className="flex flex-row justify-center booking-item cursor-pointer rounded-full py-1 bg-primary w-[85vw] text-white">
                        <Search sx={{ color: 'white' }} />
                        <p>Search</p>
                    </Link>
                </div>
                :

                <div className="flex items-center lg:absolute  lg:right-[-4rem] location-bg ">
                    <Link to={'/booking?car=2&hp=5'} className="booking-item cursor-pointer rounded-full bg-primary w-full p-9">
                        <div className="flex items-center">
                            <div className="flex flex-col w-full">
                                <div className="relative ">
                                    <Search sx={{ transform: "scale(2)", color: 'white' }} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            }
        </>
    )
}

export default SearchButton