import React from 'react'
import './RoudMap.css'
import Titlecourses from '../Titlecourses/Titlecourses'
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { LuShieldCheck } from "react-icons/lu";
import { AiOutlinePython } from "react-icons/ai";
import { LuPuzzle } from "react-icons/lu";
export default function RoudMap() {
    return (
        <div className='container mx-auto mb-9'>
            <Titlecourses
                colorSpan='bg-red-500'
                titleSection='نقشه راه ها'
                descSection='نقشه های راه برای شروع اصولی یادگیری'
            />
            <div className='flex items-center justify-center mt-10'>
                <div className='py-5 bg-gradient-to-r from-[#FFB535] to-[#F2295B] overflow-hidden w-[20%] h-40 bg-red-300 flex flex-col justify-center items-center rounded-3xl text-white mx-3.5'>
                    <HiOutlineCodeBracketSquare className='icon-bracket mb-4' />
                    <p className='text-xl mb-2.5'>فرانت اند</p>
                    <p>28 دوره</p>
                </div>
                <div className='py-5 bg-gradient-to-r from-[#30C5E4] to-[#28E55D] overflow-hidden w-[20%] h-40 flex flex-col justify-center items-center rounded-3xl text-white mx-3.5'>
                    <LuShieldCheck className='icon-bracket mb-4' />
                    <p className='text-xl mb-2.5'>امنیت</p>
                    <p>9 دوره</p>
                </div>
                <div className='py-5 bg-gradient-to-r from-[#2E9EFF] to-[#9C33F7] overflow-hidden w-[20%] h-40 flex flex-col justify-center items-center rounded-3xl text-white mx-3.5'>
                    <AiOutlinePython className='icon-bracket mb-4' />
                    <p className='text-xl mb-2.5'>پایتون</p>
                    <p>6 دوره</p>
                </div>
                <div className='py-5 bg-gradient-to-r from-[#FF3571] to-[#880175] overflow-hidden w-[20%] h-40 flex flex-col justify-center items-center rounded-3xl text-white mx-3.5'>
                    <LuPuzzle className='icon-bracket mb-4' />
                    <p className='text-xl mb-2.5'>مهارت های نرم</p>
                    <p>6 دوره</p>
                </div>
            </div>
        </div>
    )
}
