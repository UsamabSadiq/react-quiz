import React from 'react'
import { BsStarFill } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <h1 className="mainHeading text-center text-4xl font-semibold uppercase underline text-slate-400 mb-3">quiz App test</h1>
            <div className="header ">
                <h2 className='qestionNum text-3xl font-semibold my-2'>
                    Question <span className='text-xl'>17/20</span>

                </h2>
                <p className='category text-lg text-slate-400 font-medium my-2'>
                    Entertainment: Board Games
                </p>
                <div className="ratingsStars flex gap-x-2 my-1">
                    <BsStarFill className='text-green-400' />
                    <BsStarFill className='text-green-400' />
                    <BsStarFill className='text-green-400' />
                    <BsStarFill className='text-green-400' />

                </div>


            </div>

        </>
    )
}

export default Header
