import React, { useEffect, useState } from 'react'
import BottomProgressBar from './BottomProgressBar';

const QuestionAnswers = ({ fileData, currentQuestion, setCurrentQuestion, loading, setShowScoreCard, marks, setMarks }) => {
    // const [marks, setMarks] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const [disableBtn, SetDisableBtn] = useState(false)
    const [allAnswer, setAllAnswer] = useState([])

    console.log(wrongAnswer);
    // next question function
    const nextQuestion = () => {
        updateMarks()
        if (currentQuestion < fileData.length - 1) {
            setCurrentQuestion(currentQuestion + 1)

        }
        else { }
    }

    const updateMarks = () => {
        if (selectedAnswer) {
            if (decodeURIComponent(selectedAnswer) === decodeURIComponent(fileData[currentQuestion]?.correct_answer)) {
                setMarks(marks + 1)
                setAllAnswer([...allAnswer, selectedAnswer])
                setSelectedAnswer("")

            } else if (decodeURIComponent(selectedAnswer) !== decodeURIComponent(fileData[currentQuestion]?.correct_answer)) {
                setWrongAnswer(true)
                setAllAnswer([...allAnswer, selectedAnswer])
                setSelectedAnswer("")

                alert('wrong Answer')
            }
            return
        }
    }

    // Previous question function
    const previousQuestion = () => {
        if (!currentQuestion < 1) {
            setCurrentQuestion(currentQuestion - 1)
        }
        else { }
    }

    // For Disabling Next Button
    useEffect(() => {
        if (allAnswer.length === 20) {
            alert('You Answer all questions successfull')
            SetDisableBtn(true)
        } else { }
    }, [allAnswer.length])


    return (
        <>
            {
                loading ? <div className='flex justify-center items-center gap-x-3'>
                    {/* Loading  */}
                    <div
                        className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-purple-400 border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                    </div>
                    <p className='text-2xl font-semibold '>Loading</p>

                </div> :

                    <>
                        <div className="main min-h-[45vh] flex items-baseline  md:items-center mt-3" >

                            <div className="content-box rounded-md px-3 border border-gray-200 shadow-xl pb-4 mx-auto">

                                <div className="question pt-3">
                                    <span className='text-lg font-semibold p-1 mr-1'>{currentQuestion + 1}.</span>

                                    <span className="question  pt-2 text-lg font-semibold  ">
                                        {decodeURIComponent(fileData[currentQuestion]?.question)}
                                    </span>
                                </div>

                                {/* Map Answers  */}
                                <div className="answers py-2 flex flex-col justify-center gap-4  w-full my-4">
                                    {
                                        fileData[currentQuestion]?.incorrect_answers?.map((item, index) => {

                                            return (
                                                <button key={index} onClick={() => setSelectedAnswer(decodeURIComponent(item))} className='border border-gray-400 shadow-lg px-3 py-1 rounded-md hover:bg-gray-300  duration-300 text-base font-medium focus:outline-none focus:bg-green-300 focus:ring'>
                                                    {decodeURIComponent(item)}
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Next, Back, Marks Counter */}
                        <div className="heading-nextbtn text-center flex justify-between flex-wrap gap-y-3 mx-auto my-5 md:my-10 ">

                            <button onClick={previousQuestion} className="next-btn border order-last md:order-none border-purple-500 bg-purple-400  px-5 py-1 rounded-md hover:bg-purple-700 duration-300 text-lg font-medium text-white w-full md:w-auto">
                                Back
                            </button>

                            <div className={`gap-x-3 flex  items-center justify-center  `}>
                                <h2 className={`wrongAnswer cursor-pointer capitalize border-2 border-gray-400 text-xl font-medium  px-5 py-1 rounded-lg`} >Marks: {marks}</h2>
                            </div>
                            {

                                !disableBtn ? <button onClick={nextQuestion} className={`next-btn border border-purple-500 bg-purple-400  px-5 py-1 rounded-md hover:bg-purple-700 duration-300 text-lg font-medium text-white w-full md:w-auto`}>
                                    Next
                                </button> :

                                    <button onClick={() => setShowScoreCard(true)} className={`next-btn border border-purple-500 bg-purple-400  px-5 py-1 rounded-md hover:bg-purple-700 duration-300 text-lg font-medium text-white w-full md:w-auto`}>
                                        Done
                                    </button>

                            }
                        </div>

                        <BottomProgressBar fileData={fileData} marks={marks} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} allAnswer={allAnswer} />

                    </>
            }

        </>
    )
}

export default QuestionAnswers
