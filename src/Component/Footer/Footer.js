import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { IoHeart } from "react-icons/io5";
export default function Footer() {
    return (

        <div className='w-full bg-white dark:bg-[#242A38] mt-20 pt-16 pb-10'>
            <div className='container mx-auto'>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <img src='./images/logo.webp' className='h-16' />
                            <div className='mr-3'>
                                <h1 className='text-zinc-800 dark:text-white font-danabold text-3xl mb-1'>سبز لرن</h1>
                                <p className='text-zinc-800 dark:text-white font-danabold text-base'>sabzlearn.ir</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-neutral-200 h-11 w-11 flex items-center justify-center rounded-full hover:bg-sky-500 hover:text-white transition-all duration-150'>
                                <FaInstagram className='text-2xl' />
                            </div>
                            <div className='bg-neutral-400 h-11 w-11 flex items-center justify-center rounded-full mr-2 hover:bg-sky-500 hover:text-white transition-all duration-150'>
                                <LiaTelegramPlane className='text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='flex items-center text-zinc-800 dark:text-gray-400 gap-x-10 mt-12'>
                        <li className='flex items-center gap-x-2'>
                            09364782404
                            <FiPhone className='text-xl' />
                        </li>
                        <li className='flex items-center gap-x-2'>
                            arianbtco@gmail.com
                            <GoMail className='text-xl' />
                        </li>
                        <li className='flex items-center gap-x-2'>
                            sabzlearn_support@
                            <LiaTelegramPlane className='text-xl' />
                        </li>
                    </ul>
                </div>
                <div className='h-px w-full bg-slate-300 mt-12'></div>
                <div className='flex mt-10 justify-between'>
                    <div className='w-[29%]'>
                        <h1 className='text-zinc-900 dark:text-white font-danabold text-2xl '>درباره سبز لرن</h1>
                        <p className='text-gray-400 mt-5 text-base leading-7'>
                            شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی،با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.
                        </p>
                    </div>
                    <div className='flex gap-x-10'>
                        <div>
                            <ul>
                                <li className='text-zinc-800 dark:text-white text-2xl font-danabold'>
                                    دوره های پرطرفدار
                                </li>
                                <li className='text-zinc-800 dark:text-gray-400 text-sm my-4'>
                                    آموزش پایتون
                                </li>
                                <li className='text-zinc-800 dark:text-gray-400 text-sm my-4'>
                                    آموزش جاوا اسکریپت
                                </li>
                                <li className='text-zinc-800 dark:text-gray-400 text-sm my-4'>
                                    آموزش HTML
                                </li>
                                <li className='text-zinc-800 dark:text-gray-400 text-sm my-4'>
                                    آموزش CSS
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='text-zinc-800 dark:text-white text-2xl font-danabold'>
                                    دسترسی سریع
                                </li>
                                <li className='text-zinc-800 dark:text-gray-400 text-sm my-4'>
                                    قوانین ، مقررات
                                </li>
                                <li className='text-zinc-800 dark:text-gray-400 text-sm my-4'>
                                    ارسال تیکت
                                </li>
                                <li className='text-zinc-800 dark:text-gray-400 text-sm my-4'>
                                    همه دوره ها
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src='./images/enamad.png' />
                    </div>
                </div>
                <div className='flex justify-between w-full mt-10'>
                    <p className='text-zinc-800 dark:text-gray-400 text-sm'>کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.</p>
                    <p className='flex text-zinc-800 dark:text-gray-400 text-sm'>ساخته شده با <IoHeart className='text-red-600 mx-1 text-xl' /> در سبز لرن</p>
                </div>
            </div>
        </div>
    )
}
