import React, { useState } from 'react'
import Card from './Card'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Testimonial = ({ reviews }) => {

    const [index, setIndex] = useState(0);

    function rightshiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function leftshiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function surpriseHandler() {
        let random = Math.floor(Math.random() * reviews.length)
        setIndex(random)
    }

    return (
        <div className=' w-[70vw] md:w-[600px] bg-white flex rounded-md flex-col justify-center items-center p-[1.5rem] transition-all duration-700 '>

            <Card review={reviews[index]} />

            <div className='flex justify-center items-center mt-5 gap-5 text-violet-400 font-bold text-3xl'>

                <button onClick={leftshiftHandler} className=' cursor-pointer hover:text-violet-500'>
                <FaChevronLeft />
                </button>

                <button onClick={rightshiftHandler} className="cursor-pointer hover:text-violet-500">
                <FaChevronRight />
                </button>

            </div>

            <div className='mt-5'>

                <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg mt-5 '>
                Surprise Me
                </button>

            </div>

        </div>
    )
}

export default Testimonial
