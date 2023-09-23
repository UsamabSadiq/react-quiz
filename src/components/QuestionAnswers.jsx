import React, { useEffect, useState } from 'react'
import { FaXmark } from "react-icons/fa6";
const QuestionAnswers = ({ fileData, currentQuestion, setCurrentQuestion }) => {
    const [marks, setMarks] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(0)
    const [wrongAnswer, setWrongAnswer] = useState(false)
    console.log(selectedAnswer);
    console.log('modifiedData =>', fileData);
    // next question
    const nextQuestion = () => {
        updateMarks()
        if (currentQuestion < fileData.length - 1) {
            setCurrentQuestion(currentQuestion + 1)

        }
        else { }
    }

    const updateMarks = () => {
        if (selectedAnswer === decodeURIComponent(fileData[currentQuestion]?.correct_answer)) {
            alert('Correct Answer')
            setMarks(marks + 1)
        } else {
            setWrongAnswer(true)
        }
    }

    const previousQuestion = () => {
        if (!currentQuestion < 1) {
            setCurrentQuestion(currentQuestion - 1)
        }
        else { }
    }

    return (
        <>
            <div className="main min-h-[45vh] flex items-baseline  md:items-center mt-5" >

                <div className="content-box rounded-md px-3 border border-gray-200 shadow-xl pb-4 mx-auto">

                    <div className="question pt-3">
                        <span className='text-lg font-semibold p-1 mr-1'>{currentQuestion + 1}.</span>

                        <span className="question  pt-2 text-lg font-medium  ">
                            {decodeURIComponent(fileData[currentQuestion]?.question)}
                        </span>
                    </div>

                    <div className="answers py-2 flex flex-col justify-center gap-4  w-full my-4">

                        {
                            fileData[currentQuestion]?.incorrect_answers?.map((item, index) => {

                                return (
                                    <button key={index} onClick={() => setSelectedAnswer(index + 1)} className='border border-gray-300 shadow-lg px-3 py-1 rounded-md hover:bg-red-700 duration-300 text-base font-medium focus:outline-none focus:ring focus:ring-violet-300'>
                                        {decodeURIComponent(item)}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Answer Response */}

            <div className="heading-nextbtn text-center flex justify-between flex-wrap gap-y-3 mx-auto translate-y-20 md:translate-y-10 lg:translate-y-0">
                <div className={`gap-x-3 items-center hidden ${wrongAnswer ? 'flex' : ""} `}>
                    <h2 className="wrongAnswer cursor-pointer capitalize bg-red-500 text-xl text-white font-normal  px-4 py-1 rounded-lg" >Soorry Wrong Answer</h2>
                    <FaXmark size={20} />
                </div>

                <button onClick={previousQuestion} className="next-btn border border-purple-500 bg-purple-400  px-5 py-1 rounded-md hover:bg-purple-700 duration-300 text-lg font-medium text-white w-full md:w-auto">
                    Back
                </button>

                <button onClick={nextQuestion} className="next-btn border border-purple-500 bg-purple-400  px-5 py-1 rounded-md hover:bg-purple-700 duration-300 text-lg font-medium text-white w-full md:w-auto">
                    Next
                </button>


            </div>


        </>
    )
}

export default QuestionAnswers
