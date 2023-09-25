import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import QuestionAnswers from '../components/QuestionAnswers'
import Score from '../components/Score'

const Quiz = () => {
    const [loading, setLoading] = useState(true)
    const [fileData, setFileData] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScoreCard, setShowScoreCard] = useState(false)
    const [marks, setMarks] = useState(0)


    useEffect(() => {
        fetchData()
    }, [])

    // Fetching Data from JSON 
    const fetchData = async () => {
        try {
            const res = await fetch('questionsData.json')
            const data = await res.json()

            // Modify the data to push correct_answer into incorrect_answers
            const modifiedData = data.map((item) => ({
                ...item,
                incorrect_answers: [...item.incorrect_answers, item.correct_answer],
            }));

            // console.log(modifiedData);
            setFileData(modifiedData)
            setLoading(false)


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='max-w-[1400px] mx-auto p-3'>
                {!showScoreCard ?
                    <>

                        <Header fileData={fileData} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
                        <QuestionAnswers loading={loading} fileData={fileData} setFileData={setFileData} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} showScoreCard={showScoreCard} setShowScoreCard={setShowScoreCard} marks={marks} setMarks={setMarks} />
                    </> :

                    <Score marks={marks} fileData={fileData} />

                }
            </div>
        </>
    )
}

export default Quiz
