import React from 'react'
import './mostpopularCorses.css'
import Titlecourses from '../Titlecourses/Titlecourses'
import Courses from '../courses/Courses'
export default function MostpopularCorses() {
    return (
        <div className='container mx-auto'>
            <Titlecourses
                colorSpan='bg-sky-500'
                titleSection='محبوب ترین دوره ها'
                descSection='پرمخاطب ترین دوره های رایگان سبزلرن'
                btn='btn-title'
                textbtn='مشاهده همه دوره ها'
            />
            <div className='flex items-center justify-center gap-x-3.5 flex-wrap'>
                <Courses width='w-[20%]' title="آموزش جنگو به صورت پروژه محور" img='./images/img-product/ezgif.com-jpg-to-webp-converted-20-1-768x432.webp' />
                <Courses width='w-[20%]' title="بهینه نویسی کد ها در پایتون" img='./images/img-product/IMAGE-1402-11-04-18_57_18-1-768x432.webp' />
                <Courses width='w-[20%]' title="آموزش پروژه محور فریمورک Fastify" img='./images/img-product/IMAGE-1403-02-20-17_14_44_11zon-768x432.webp' />
                <Courses width='w-[20%]' title="آموزش پروژه محور Electron JS" img='./images/img-product/elec-1-768x432.webp' />
                <Courses width='w-[20%]' title="آموزش پروژه محور NestJS از صفر!" img='./images/img-product/IMAGE-1403-02-20-17_59_09_11zon-768x432.webp' />
                <Courses width='w-[20%]' title="مینی پروژه های تخصصی با Html، Css" img='./images/img-product/ezgif.com-jpg-to-webp-converted-32-1-768x432.webp' />
                <Courses width='w-[20%]' title="توسعه کتابخانه با جاوااسکریپت" img='./images/img-product/1402-10-20-17.40.16_11zon-768x432.webp' />
                <Courses width='w-[20%]' title="Data Visualization با پایتون" img='./images/img-product/ezgif.com-jpg-to-webp-converted-19-1-768x432.webp' />
            </div>
        </div>
    )
}
