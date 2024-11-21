import React from 'react'
import './HelpYou.css'
import { TiRadar } from 'react-icons/ti'
import Titlecourses from '../Titlecourses/Titlecourses'
export default function HelpYou() {
    return (
        <div className='container mx-auto mb-20'>
            <Titlecourses
                colorSpan='bg-sky-500'
                titleSection='ما چه کمکی میتونیم بهت بکنیم'
                descSection='از شروع مسیر کنارتیم نمیزاریم آب تو دلت تکون بخوره'
            />
            <div className='flex mt-5 items-center flex-wrap justify-center'>
                <div className='flex bg-white dark:bg-[#242A38] pl-7 pr-5 py-6 rounded-2xl w-[39%] m-3'>
                    <div className='w-20 h-20 flex relative'>
                        <div className='w-12 h-full rounded-3xl bg-sky-500/20 '></div>
                        <img src='./images/icons8-book-48.png' className='absolute left-2 bottom-4' />
                    </div>
                    <div>
                        <h1 className='text-zinc-800 dark:text-white text-xl font-bold font-danabold mb-3 mr-4'>تضمین کاملترین محتوا</h1>
                        <p className='text-zinc-800 dark:text-gray-400 text-sm mr-4'>
                            بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز <br />دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.
                        </p>
                    </div>
                </div>
                <div className='flex bg-white dark:bg-[#242A38] pl-7 pr-5 py-6 rounded-2xl w-[39%] m-3' >
                    <div className='w-20 h-20 flex relative'>
                        <div className='w-12 h-full rounded-3xl bg-amber-500/20 '></div>
                        <img src='./images/icons8-messages-50 (1).png' className='absolute left-2 bottom-3.5' />
                    </div>
                    <div>
                        <h1 className='text-zinc-800 dark:text-white text-xl font-bold font-danabold mb-3 mr-4'>پشتیبانی دائمی</h1>
                        <p className='text-zinc-800 dark:text-gray-400 text-sm mr-4'>
                            هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل <br />کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.
                        </p>
                    </div>
                </div>
                <div className='flex bg-white dark:bg-[#242A38] pl-7 pr-5 py-6 rounded-2xl w-[39%] m-3'>
                    <div className='w-20 h-20 flex relative'>
                        <div className='w-12 h-full rounded-3xl bg-green-500/20 '></div>
                        <img src='./images/icons8-signal-64.png' className='absolute left-2 bottom-4 h-12 w-12' />
                    </div>
                    <div>
                        <h1 className='text-zinc-800 dark:text-white text-xl font-bold font-danabold mb-3 mr-4'>پروژه محور در راستای بازار کار</h1>
                        <p className='text-zinc-800 dark:text-gray-400 text-sm mr-4'>
                            کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به <br />نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.
                        </p>
                    </div>
                </div>
                <div className='flex bg-white dark:bg-[#242A38] pl-7 pr-5 py-6 rounded-2xl w-[39%] m-3'>
                    <div className='w-20 h-20 flex relative'>
                        <div className='w-12 h-full rounded-3xl bg-red-500/20 '></div>
                        <img src='./images/icons8-clipboard-48.png' className='absolute left-2 bottom-4' />
                    </div>
                    <div>
                        <h1 className='text-zinc-800 dark:text-white text-xl font-bold font-danabold mb-3 mr-4'>تضمین کاملترین محتوا</h1>
                        <p className='text-zinc-800 dark:text-gray-400 text-sm mr-4'>
                            بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز <br />دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
