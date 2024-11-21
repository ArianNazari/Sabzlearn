import React from 'react'
import './TopBar.css'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
export default function Topbat() {
  return (
    <div className=' bg-white dark:bg-[#242A38] h-24 flex items-center justify-around'>
      <div className='flex items-center'>
        <img src='./images/logo.webp' className='h-12 ml-4' />
        <ul className='flex items-center'>
          <li className='text-zinc-700 mx-3 dark:text-white'>
            <a href='' className='flex items-center hover:text-green-500'>
              <p className='hover:text-green-500'>فرانت اند</p>
              <IoIosArrowDown className='mr-1' />
            </a>
          </li>
          <li className='text-zinc-700 mx-3 dark:text-white'>
            <a href='' className='flex items-center hover:text-green-500'>
              <p className='hover:text-green-500'>امنیت</p>
              <IoIosArrowDown className='mr-1' />
            </a>
          </li>
          <li className='text-zinc-700 mx-3 dark:text-white'>
            <a href='' className='flex items-center hover:text-green-500'>
              <p className='hover:text-green-500'>پایتون</p>
              <IoIosArrowDown className='mr-1' />
            </a>
          </li>
          <li className='text-zinc-700 mx-3 dark:text-white'>
            <a href='' className='flex items-center hover:text-green-500'>
              <p className='hover:text-green-500'>پی اچ پی</p>
              <IoIosArrowDown className='mr-1' />
            </a>
          </li>
          <li className='text-zinc-700 mx-3 dark:text-white'>
            <a href='' className='flex items-center hover:text-green-500'>
              <p className='hover:text-green-500'>ارتقای مهارت</p>
              <IoIosArrowDown className='mr-1' />
            </a>
          </li>
          <li className='text-zinc-700 mx-3 dark:text-white'>
            <a href='' className='flex items-center hover:text-green-500'>
              <p className='hover:text-green-500'>مقالات</p>
              <IoIosArrowDown className='mr-1' />
            </a>
          </li>
        </ul>
      </div>
      <div className='flex h-12 justify-around w-[35%]'>
        <div className='flex serach-box-header bg-white/5 items-center justify-between rounded-full'>
          <input type='text' placeholder='چیو میخایی یاد بگیری ؟' className='input-header text-white border-none outline-none w-full h-[90%] mr-4' />
          <span className='p-4 flex items-center justify-center'>
            <IoSearchOutline />
          </span>
        </div>
        <div className='flex items-center'>
          <div className='bg-white/5 h-12 w-12 rounded-full flex justify-center items-center text-white text-xl mx-2'>
            <BsBrightnessHigh />
          </div>
          <div className='bg-white/5 h-12 w-12 rounded-full flex justify-center items-center text-white text-xl mx-2'>
            <HiOutlineShoppingBag />
          </div>
          <div className='bg-white/5 h-12 w-12 rounded-full flex justify-center items-center text-white text-xl mx-2'>
            <FaRegUser />
          </div>
        </div>
      </div>
    </div>

  )
}
