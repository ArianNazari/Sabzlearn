import React from 'react'
import './Titlecourses.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function Titlecourses(props) {
    if (props.btn == 'btn-title') {
        return (
            <div className='container mx-auto px-12 mt-20'>
                <div className='flex w-full items-center justify-between'>
                    <div>
                        <div className='flex items-center'>
                            <span className={`${props.colorSpan} rounded-sm w-5 h-5`}></span>
                            <h3 className='text-zinc-800 dark:text-white font-bold title-courses mr-4'>{props.titleSection}</h3>
                        </div>
                        <div>
                            <p className='text-slate-500 text-lg mt-3'>{props.descSection}</p>
                        </div>
                    </div>
                    <button className='flex items-center justify-between text-green-500 bg-none hover:text-white transition-all duration-150 hover:bg-green-500 btn-title-courses'>
                        {props.textbtn}
                        <IoIosArrowRoundBack className='icon-arrow' />
                    </button>
                </div>
            </div>
        )
    } else if (props.btn == 'btn-arrow') {
        return (
            <div className='container mx-auto px-12 mt-20'>
                <div className='flex w-full items-center justify-between'>
                    <div>
                        <div className='flex items-center'>
                            <span className={`${props.colorSpan} rounded-sm w-5 h-5`}></span>
                            <h3 className='text-zinc-800 dark:text-white font-bold title-courses mr-4'>{props.titleSection}</h3>
                        </div>
                        <div>
                            <p className='text-slate-500 text-lg mt-3'>{props.descSection}</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button className='h-12 w-12 rounded-full flex items-center justify-center text-green-500 border border-green-500 hover:bg-green-500 hover:text-white transition-all duration-150 ml-2'><IoIosArrowForward /></button>
                        <button className='h-12 w-12 rounded-full flex items-center justify-center text-green-500 border border-green-500 hover:bg-green-500 hover:text-white transition-all duration-150'><IoIosArrowBack /></button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='container mx-auto px-12 mt-20'>
                <div className='flex w-full items-center justify-between'>
                    <div>
                        <div className='flex items-center'>
                            <span className={`${props.colorSpan} rounded-sm w-5 h-5`}></span>
                            <h3 className='text-zinc-800 dark:text-white font-bold title-courses mr-4'>{props.titleSection}</h3>
                        </div>
                        <div>
                            <p className='text-slate-500 text-lg mt-3'>{props.descSection}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





