import React, { useState } from 'react'
import StarDifficulty from './StarDifficulty';

const Header = ({ fileData, currentQuestion }) => {

    return (
        <>
            <h1 className="mainHeading text-center text-4xl font-semibold uppercase underline text-slate-400 mb-3">quiz App test</h1>
            <div className="header ">
                <h2 className='qestionNum text-3xl font-semibold my-2'>
                    Question <span className='text-xl'>{currentQuestion + 1}/{fileData.length}</span>

                </h2>
                <div className={`progressBar border-2 border-purple-600 mb-3`} style={{ width: `${(currentQuestion + 1) * 5}%` }}></div>

                <p className='category text-lg text-slate-400 font-medium my-2'>
                    {decodeURIComponent(fileData[currentQuestion]?.category)}
                </p>
                <div className="ratingsStars flex gap-x-2 my-1">

                    <StarDifficulty difficulty={fileData[currentQuestion]?.difficulty} />

                </div>
            </div>
        </>
    )
}

export default Header
