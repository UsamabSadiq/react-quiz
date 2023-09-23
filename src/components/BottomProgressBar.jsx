import React from "react";

const BottomProgressBar = ({
    fileData,
    currentQuestion,
    setCurrentQuestion,
    allAnswer,
    marks,
}) => {
    const colors = [
        {
            color: 'purple',
            text: 'remaining '
        },
        {
            color: 'gray',
            text: 'total '
        },
        {
            color: 'blue',
            text: 'attempted '
        },
        {
            color: 'green',
            text: 'correct '
        }]

    //         totalQuestion
    // attemptedPercentage
    // correctPercentage
    // remainingPercentage

    //Calculate the progress percentages
    const totalQuestions = fileData.length * 5
    const attemptedQuestions = allAnswer.length * 5
    const correctQuestions = marks * 5
    const remainingQuestions = totalQuestions - attemptedQuestions


    return (
        <>
            <div className="progress-bar relative">
                {/* total questions */}
                <div className="total-question bg-slate-400 absolute text-transparent" style={{ width: `${totalQuestions}%` }}>
                    Total
                </div>
                {/* Green for attempted questions */}
                <div className="attempted-question absolute bg-green-500 z-50 text-transparent" style={{ width: `${correctQuestions}%` }}>
                    Correct
                </div>

                {/* Blue for correct questions */}
                <div className="correct-question bg-blue-500 absolute z-30 text-transparent" style={{ width: `${attemptedQuestions}%` }}>
                    Attempt
                </div>

                {/* Purple for remaining questions */}
                <div className="remaining questions bg-purple-500 absolute z-20 text-transparent" style={{ width: `${remainingQuestions}%` }}>
                    Remaining
                </div>
            </div>


            {/*  color representation */}
            < div className="main flex flex-wrap gap-3 justify-between md:justify-center mb-10 translate-y-10" >
                {
                    colors.map((color, index) => {
                        return (
                            <div key={index} className="content border border-gray-400 px-4 py-1  flex  gap-x-1 items-center rounded-md">
                                <div className={`color rounded-full px-1 border-2 h-6 w-6`} style={{ background: color.color }}></div>
                                <div className="text text-base font-medium capitalize">{color.text}</div>
                            </div>
                        )
                    })
                }


            </div >
        </>
    );
};

export default BottomProgressBar;









