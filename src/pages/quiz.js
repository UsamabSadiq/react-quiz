import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import QuestionAnswers from '../components/QuestionAnswers'

const Quiz = () => {
    const [fileData, setFileData] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
        fetchData()
    }, [])

    // Fetching Data from JSON 
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

    return (
        <>
            <div className='max-w-[1400px] mx-auto p-3'>
                <Header fileData={fileData} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
                <QuestionAnswers fileData={fileData} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
            </div>
        </>
    )
}

export default Quiz
