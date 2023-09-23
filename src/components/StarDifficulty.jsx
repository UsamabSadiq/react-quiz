import React from 'react'
import { BsStarFill } from "react-icons/bs";

const StarDifficulty = ({ difficulty }) => {

    let starIcon = []

    let star = 0
    if (difficulty === 'easy') {
        star = 1
    } else if (difficulty === 'medium') {
        star = 2
    } else if (difficulty === 'hard') {
        star = 3
    }

    for (let i = 0; i < star; i++) {
        starIcon.push(<BsStarFill key={i} className='text-yellow-500' />)
    }

    return (
        <>
            {starIcon}
        </>
    )
}

export default StarDifficulty
