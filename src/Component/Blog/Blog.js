import React from 'react'
import './Blog.css'
import Titlecourses from '../Titlecourses/Titlecourses'
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
export default function Blog() {
    return (
        <div className='container mx-auto mt-20 mb-20'>
            <Titlecourses
                colorSpan='bg-amber-500'
                titleSection='وبلاگ آموزشی سبز لرن'
                descSection='مقالات بروز برنامه نویسی'
                btn='btn-title'
                textbtn='مشاهده همه مقالات'
            />
            <div className='flex items-center justify-center'>
                <div className='w-[21%] bg-[#242A38] rounded-3xl mx-3.5 mt-10'>
                    <img src='./images/40.Main_-768x384.webp' className='rounded-2xl h-[200px]' />
                    <div className='px-4'>
                        <h1 className='text-zinc-800 dark:text-white font-danabold text-lg mb-4 mt-4'>ChatGPT Canvas: تازه‌واردی که دنیای برنامه‌نویسی را تغییر می‌دهد؟</h1>
                        <p className='text-zinc-800 dark:text-gray-400 text-sm'>
                            دنیای برنامه‌نویسی به سرعت در حال تغییر است. هر روز ابزارهای جدیدی معرفی می‌شوند که زندگی ما برنامه‌نویسان را راحت‌تر می‌کنند. اما وقتی صحبت از هوش مصنوعی می‌شود،...
                        </p>
                    </div>
                    <div className='flex items-center px-4 mt-5 justify-between'>
                        <div className='flex items-center'>
                            <CiUser className='text-2xl ml-1 text-gray-400 mb-1' />
                            <p className='text-gray-400 text-sm'>مهدی ایلخانی نسب</p>
                        </div>
                        <div className='flex items-center'>
                            <CiCalendar className='text-2xl ml-1 text-gray-400 mb-1' />
                            <p className='text-gray-400 text-sm  ml-2'>1403/7/25</p>
                        </div>
                    </div>
                    <div className='px-4 my-6'>
                        <div className='h-px bg-gray-500'></div>
                    </div>
                    <div className='my-6'>
                        <button className='text-white flex items-center font-danabold cursor-pointer mx-auto'>
                            <p>مطالعه مقاله</p>
                            <HiOutlineArrowSmLeft className='text-lg mr-2 text-zinc-800 bg-white rounded-full' />
                        </button>
                    </div>
                </div>
                <div className='w-[21%] bg-[#242A38] rounded-3xl mx-3.5 mt-10'>
                    <img src='./images/it-چیست-768x512.webp' className='rounded-2xl h-[200px] w-full' />
                    <div className='px-4'>
                        <h1 className='text-zinc-800 dark:text-white font-danabold text-lg mb-4 mt-4'>ChatGPT Canvas: تازه‌واردی که دنیای برنامه‌نویسی را تغییر می‌دهد؟</h1>
                        <p className='text-zinc-800 dark:text-gray-400 text-sm'>
                            دنیای برنامه‌نویسی به سرعت در حال تغییر است. هر روز ابزارهای جدیدی معرفی می‌شوند که زندگی ما برنامه‌نویسان را راحت‌تر می‌کنند. اما وقتی صحبت از هوش مصنوعی می‌شود،...
                        </p>
                    </div>
                    <div className='flex items-center px-4 mt-5 justify-between'>
                        <div className='flex items-center'>
                            <CiUser className='text-2xl ml-1 text-gray-400 mb-1' />
                            <p className='text-gray-400 text-sm'>مهدی ایلخانی نسب</p>
                        </div>
                        <div className='flex items-center'>
                            <CiCalendar className='text-2xl ml-1 text-gray-400 mb-1' />
                            <p className='text-gray-400 text-sm  ml-2'>1403/7/25</p>
                        </div>
                    </div>
                    <div className='px-4 my-6'>
                        <div className='h-px bg-gray-500'></div>
                    </div>
                    <div className='my-6'>
                        <button className='text-white flex items-center font-danabold cursor-pointer mx-auto'>
                            <p>مطالعه مقاله</p>
                            <HiOutlineArrowSmLeft className='text-lg mr-2 text-zinc-800 bg-white rounded-full' />
                        </button>
                    </div>
                </div>
                <div className='w-[21%] bg-[#242A38] rounded-3xl mx-3.5 mt-10'>
                    <img src='./images/39.Main_-768x384.webp' className='rounded-2xl h-[200px]' />
                    <div className='px-4'>
                        <h1 className='text-zinc-800 dark:text-white font-danabold text-lg mb-4 mt-4'>ChatGPT Canvas: تازه‌واردی که دنیای برنامه‌نویسی را تغییر می‌دهد؟</h1>
                        <p className='text-zinc-800 dark:text-gray-400 text-sm'>
                            دنیای برنامه‌نویسی به سرعت در حال تغییر است. هر روز ابزارهای جدیدی معرفی می‌شوند که زندگی ما برنامه‌نویسان را راحت‌تر می‌کنند. اما وقتی صحبت از هوش مصنوعی می‌شود،...
                        </p>
                    </div>
                    <div className='flex items-center px-4 mt-5 justify-between'>
                        <div className='flex items-center'>
                            <CiUser className='text-2xl ml-1 text-gray-400 mb-1' />
                            <p className='text-gray-400 text-sm'>مهدی ایلخانی نسب</p>
                        </div>
                        <div className='flex items-center'>
                            <CiCalendar className='text-2xl ml-1 text-gray-400 mb-1' />
                            <p className='text-gray-400 text-sm  ml-2'>1403/7/25</p>
                        </div>
                    </div>
                    <div className='px-4 my-6'>
                        <div className='h-px bg-gray-500'></div>
                    </div>
                    <div className='my-6'>
                        <button className='text-white flex items-center font-danabold cursor-pointer mx-auto'>
                            <p>مطالعه مقاله</p>
                            <HiOutlineArrowSmLeft className='text-lg mr-2 text-zinc-800 bg-white rounded-full' />
                        </button>
                    </div>
                </div>
                <div className='w-[21%] bg-[#242A38] rounded-3xl mx-3.5 mt-10'>
                    <img src='./images/تصویر-شاخص-Recovered-768x512.webp' className='rounded-2xl h-[200px] w-full' />
                    <div className='px-4'>
                        <h1 className='text-zinc-800 dark:text-white font-danabold text-lg mb-4 mt-4'>ChatGPT Canvas: تازه‌واردی که دنیای برنامه‌نویسی را تغییر می‌دهد؟</h1>
                        <p className='text-zinc-800 dark:text-gray-400 text-sm'>
                            دنیای برنامه‌نویسی به سرعت در حال تغییر است. هر روز ابزارهای جدیدی معرفی می‌شوند که زندگی ما برنامه‌نویسان را راحت‌تر می‌کنند. اما وقتی صحبت از هوش مصنوعی می‌شود،...
                        </p>
                    </div>
                    <div className='flex items-center px-4 mt-5 justify-between'>
                        <div className='flex items-center'>
                            <CiUser className='text-2xl ml-1 text-gray-400 mb-1' />
                            <p className='text-gray-400 text-sm'>مهدی ایلخانی نسب</p>
                        </div>
                        <div className='flex items-center'>
                            <CiCalendar className='text-2xl ml-1 text-gray-400 mb-1' />
                            <p className='text-gray-400 text-sm  ml-2'>1403/7/25</p>
                        </div>
                    </div>
                    <div className='px-4 my-6'>
                        <div className='h-px bg-gray-500'></div>
                    </div>
                    <div className='my-6'>
                        <button className='text-white flex items-center font-danabold cursor-pointer mx-auto'>
                            <p>مطالعه مقاله</p>
                            <HiOutlineArrowSmLeft className='text-lg mr-2 text-zinc-800 bg-white rounded-full' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
