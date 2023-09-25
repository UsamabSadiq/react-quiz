import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Score = ({ marks, fileData }) => {

    const [greetings, setGreeting] = useState("")
    const [textColor, setTextColor] = useState("")
    const percentage = (marks / fileData.length) * 100

    useEffect(() => {
        if (percentage > 0 && percentage <= 50) {
            setGreeting("Need to Workhard!!")
            setTextColor("text-red-600")
        } else if (percentage > 50 && percentage <= 70) {
            setGreeting("Good Job!!!")
            setTextColor("text-green-600")
        } else {
            setGreeting("Congratulations!!")
            setTextColor("text-yellow-400")
        }

    }, [percentage])


    return (
        <>
            <Link to={'/'} className={`next-btn border capitalize border-purple-500 bg-purple-400  px-5 py-1 rounded-md hover:bg-purple-700 duration-300 text-lg font-medium text-white w-full md:w-auto`}>
                go to home
            </Link>
            <div className=" mt-10 flex justify-center items-center ">

                <div className="con   border-2 border-gray-200 min-w-[50%] px-3 rounded-lg shadow-xl ">
                    <div className="text mb-7 mt-3">
                        <h2 className={`text-center text-lg font-bold border-2 ${textColor} border-gray-200 rounded-full w-fit px-3 py-3 mx-auto shadow-lg mb-4`}>{percentage}%</h2>

                        {/* For total marks */}
                        <div className="total flex justify-between">
                            <h3 className='text-lg font-semibold'>Total Marks</h3>
                            <h3 className='text-lg font-semibold'>Number</h3>
                        </div>

                        <div className="border border-slate-200 my-2"></div>
                        {/* For obtained marks */}

                        <div className="obtained flex justify-between px-4">
                            <h3 className='text-lg font-medium'>{fileData.length}</h3>
                            <h3 className='text-lg font-medium'>{marks}</h3>
                        </div>

                        <div className={`greeting uppercase text-center text-lg font-semibold mt-5 ${textColor}`}>
                            {greetings}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Score
