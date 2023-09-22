import React, { useState, useEffect } from 'react'
import { FaXmark } from "react-icons/fa6";
const QuestionAnswers = () => {
    const [fileData, setFileData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const res = await fetch('questionsData.json')
            const data = await res.json()

            console.log('apiData =>', data);
            setFileData(data)
        } catch (error) {
            console.log(error);
        }
    }
    // fetchData()
    console.log('stateData =>', fileData);

    // {decodeURIComponent(fileData[0].question)}
    return (
        <>
            <div className="main min-h-[45vh] flex items-baseline  md:items-center mt-5" >
                <div className="content-box rounded-md px-3 border border-gray-200 shadow-xl py-4 mx-auto">
                    <h4 className="question  pt-2 text-lg font-medium  ">{decodeURIComponent(fileData[0]?.question)}  </h4>
                    <div className="answers py-2 flex justify-center gap-4 items-center flex-wrap my-4">


                        {
                            fileData[0].incorrect_answers?.map(item => {
                                decodeURIComponent(item)
                                return (
                                    <button className='border border-gray-300 shadow-xl px-3 py-1 rounded-md hover:bg-red-700 duration-300 text-base font-medium'>
                                        {item}
                                    </button>
                                )
                            })
                        }


                    </div>
                </div>


            </div>

            {/* Answer Response */}

            <div className="heading-nextbtn text-center flex justify-between flex-wrap gap-y-3 mx-auto translate-y-20 md:translate-y-16 lg:translate-y-0">
                <h2 className="wrongAnswer cursor-pointer capitalize bg-red-500 text-xl text-white font-normal  px-4 py-1 order-last inline-flex items-center rounded-lg ">Soorry Wrong Answer <FaXmark size={23} /></h2>

                <button className="next-btn border border-purple-500 bg-purple-400  px-5 py-1 rounded-md hover:bg-purple-700 duration-300 text-lg font-medium text-white w-full md:w-auto">
                    Next
                </button>
            </div>


        </>
    )
}

export default QuestionAnswers
