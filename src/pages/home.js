import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>

            <div className='main w-full h-screen flex justify-center items-center'>
                <Link to={'/quiz'} className='content text-2xl font-semibold text-white capitalize bg-purple-500 hover:bg-purple-700 duration-300 px-5 py-3 rounded-lg shadow-2xl cursor-pointer'>
                    Start Quiz
                </Link >
            </div>
        </>
    )
}

export default Home
