import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify"

const Card = ({ course, setClicked, clicked }) => {

    function clickHandler() {
        //logic:
        //Unliked:
        if (clicked.includes(course.id)) {
            setClicked((prev) => prev.filter((cid) => (cid !== course.id)))
            toast.error("Unliked")
        }

        // Liked:
        else {
         
            if (clicked.length === 0) {
                setClicked([course.id])
            }

            else {
                setClicked((prev) => [...prev, course.id]);
            }

            toast.success("Liked")
        }
    }

    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt="" />

                <div>
                    <button onClick={clickHandler} className='w-[40px] rounded-full h-[40px] absolute right-2 bottom-0.5 bg-slate-100  grid place-items-center '>
                        {
                            clicked.includes(course.id) ?
                             (<FcLike fontSize={"1.7rem"} /> ) 
                             : (<FcLikePlaceholder fontSize={"1.7rem"} /> )

                        }
                    </button>
                </div>

            </div>
            <div className='p-4'>
                <p className='text-white font-bold text-lg leading-6 '>{course.title}</p>
                <p className='text-white m-2'>
                    {
                        course.description.length > 100 ? (course.description.substring(0, 100)) : (course.description)
                    }
                </p>
            </div>


        </div>
    )
}

export default Card
