import React from 'react'

const BottomProgressBar = ({ fileData, currentQuestion, setCurrentQuestion, marks }) => {


    // Calculate the progress percentages
    const totalQuestion = fileData.length
    // const attemptedPercentage = (attemptedQuestions / totalQuestion) * 100;
    const correctPercentage = (marks / totalQuestion) * 100;
    // const remainingPercentage = 100 - attemptedPercentage - correctPercentage;


    return (
        <div className="progress-bar relative">
            {/* total questions */}
            <div className="total-question bg-slate-400 absolute" style={{ width: `${totalQuestion}%` }}>
                Total
            </div>
            {/* Green for attempted questions */}
            <div className="attempted-question absolute bg-green-55" style={{ width: `${50}%` }}>
                Attempted
            </div>

            {/* Blue for correct questions */}
            <div className="correct-question bg-blue-500 absolute" style={{ width: `${correctPercentage}%` }}>
                Correct
            </div>

            {/* Purple for remaining questions */}
            <div className="remaining questions bg-purple-500 absolute" style={{ width: `${10}%` }}>
                Remaining
            </div>
        </div>


    );
}



export default BottomProgressBar
