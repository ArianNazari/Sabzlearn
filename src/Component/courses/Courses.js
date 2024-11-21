import React from 'react'
import './Courses.css'
import { CiUser } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
export default function Courses(props) {
    return (
        <>
            <div className={`${props.width} bg-white dark:bg-[#242A38] rounded-3xl mt-7 mx-3.5 relative`}>
                <img src={`${props.img}`} className='w-full cursor-pointer rounded-3xl' />
                <h3 className='text-zinc-800 dark:text-white text-lg font-danabold cursor-pointer px-4 mt-3'>
                    {props.title}
                </h3>

                <p className='text-gray-400 text-sm px-4 my-5'>
                    {props.desc}
                </p>
                <div className='flex items-center justify-between px-4 text-gray-400'>
                    <div className='flex items-center'>
                        <CiUser className='icon-users' />
                        <p className='text-sm mr-1'>حمیدرضا عبادی</p>
                    </div>
                    <div className='flex items-center text-amber-500'>
                        <span className='text-sm ml-1'>5.0</span>
                        <FaStar className='mb-1' />
                    </div>
                </div>
                <div className='hr px-4'></div>
                <div className='flex items-center justify-between px-5 pb-4'>
                    <div className='flex items-center text-gray-400'>
                        <HiOutlineUsers className='icon-users' />
                        <span className='text-sm pr-2 pt-1'>678</span>
                    </div>
                    <div>
                        <div className='flex items-center '>
                            <p className='text-green-500 ml-1'>504,000</p>
                            <span className='text-xs text-green-500'>تومان</span>
                        </div>
                    </div>
                </div>
                <span className='text-white bg-green-500 rounded-full text-sm py-1 px-2 absolute top-4 right-4'>
                    30%
                </span>
            </div>
        </>
    )
}
