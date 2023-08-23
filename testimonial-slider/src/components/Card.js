import React from 'react'
import reviews from '../data'
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa"
import {FaChevronLeft , FaChevronRight} from "react-icons/fa"

const Card = ({ review }) => {
    return (
        <div className=" flex flex-col md:relative ">

            <div className='absolute top-[-4rem] z-[10] mx-auto'>
                <img className='aspect-square rounded-full w-[100px] h-[100px] z-[25] ' src={review.image} alt=""  />

                <div className='w-[100px] h-[100px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10]'></div>
            </div>

            <div>
                <p className='font-bold text-2xl mt-7 text-center capitalize tracking-wider'>{review.name}</p>

                <p className='text-sm text-violet-300 uppercase'>{review.job}</p>

            </div>

            <div className='mx-auto mt-5'>
                <FaQuoteLeft className='text-violet-400 ' />
            </div>

            <div className='text-center mt-4 text-slate-500'>
                <p>{review.text}</p>
            </div>

            <div className='mx-auto mt-5 text-violet-400'>
                <FaQuoteRight />
            </div>
           
        </div>
    )
}

export default Card
