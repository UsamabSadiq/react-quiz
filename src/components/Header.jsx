import React, { useState, useEffect } from "react";
import StarDifficulty from "./StarDifficulty";
import { Link } from "react-router-dom";

const Header = ({ fileData, currentQuestion }) => {
    const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(900); // 15 minutes * 60 seconds
    const [remainingMinutes, setRemainingMinutes] = useState(15);
    const [remainingSeconds, setRemainingSeconds] = useState(0);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (totalTimeInSeconds > 0) {
                const newTotalTimeInSeconds = totalTimeInSeconds - 1;
                const newMinutes = Math.floor(newTotalTimeInSeconds / 60);
                const newSeconds = newTotalTimeInSeconds % 60;

                setTotalTimeInSeconds(newTotalTimeInSeconds);
                setRemainingMinutes(newMinutes);
                setRemainingSeconds(newSeconds);
            } else {
                // Time Finish
                clearInterval(timerInterval);
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [totalTimeInSeconds]);
    return (
        <>
            <div className="flex justify-center">
                <Link to={'/'} className="mainHeading text-center text-4xl font-semibold uppercase underline text-slate-400 mb-3">
                    quiz App
                </Link >

            </div>

            <div className="header ">
                <h2 className="qestionNum text-3xl font-semibold my-2">
                    Question
                    <span className="text-xl">
                        {currentQuestion + 1}/{fileData.length}
                    </span>
                </h2>
                <div
                    className={`progressBar border-2 border-purple-600 mb-3`}
                    style={{ width: `${(currentQuestion + 1) * 5}%` }}
                ></div>

                <p className="category text-lg text-slate-400 font-medium my-2">
                    {decodeURIComponent(fileData[currentQuestion]?.category)}
                </p>
                <div className="ratingsStars flex gap-x-2 my-1">
                    <StarDifficulty difficulty={fileData[currentQuestion]?.difficulty} />
                </div>
            </div>

            {/* Timer */}

            <div className="flex justify-center ">
                <p className="border-2  font-semibold text-lg w-fit px-3 py-1 rounded-lg">
                    Remaining Time: {remainingMinutes} Min {remainingSeconds} Sec

                </p>
            </div>
        </>
    );
};

export default Header;
