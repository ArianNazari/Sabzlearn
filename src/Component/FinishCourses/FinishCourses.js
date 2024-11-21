import React from 'react'
import './FinishCourses.css'
import Titlecourses from '../Titlecourses/Titlecourses'
import Courses from '../courses/Courses'
export default function FinishCourses() {
    return (
        <div className='container mx-auto'>
            <Titlecourses
                colorSpan='bg-amber-500'
                titleSection='آخرین دوره های سبز لرن'
                descSection='سکوی پرتاب شما به سمت موفقیت'
                btn='btn-title'
                textbtn='مشاهده همه دوره ها'
            />
            <div className='flex items-center flex-wrap justify-center'>
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="پروژه های کاربردی با پایتون" img='./images/img-product/ezgif.com-jpg-to-webp-converted-10-1-768x432.webp' />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="آموزش جامع api نویسی با PHP" img='./images/img-product/IMAGE-1402-12-24-13_42_44-1-768x432.webp' />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="آموزش جاوا اسکریپت مقدماتی" img='./images/img-product/IMAGE-1402-12-24-13_42_44-1-768x432.webp' />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="آموزش الگوریتم و ساختمان داده " img="./images/img-product/Course-thumbnail-Algorithm-1-768x432.webp" />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="آموزش جنگو به صورت پروژه محور" img='./images/img-product/ezgif.com-jpg-to-webp-converted-20-1-768x432.webp' />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="بهینه نویسی کد ها در پایتون" img='./images/img-product/IMAGE-1402-11-04-18_57_18-1-768x432.webp' />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="آموزش پروژه محور فریمورک Fastify" img='./images/img-product/IMAGE-1403-02-20-17_14_44_11zon-768x432.webp' />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="آموزش پروژه محور Electron JS" img='./images/img-product/elec-1-768x432.webp' />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="آموزش پروژه محور NestJS از صفر!" img='./images/img-product/IMAGE-1403-02-20-17_59_09_11zon-768x432.webp' />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="مینی پروژه های تخصصی با Html، Css" img='./images/img-product/ezgif.com-jpg-to-webp-converted-32-1-768x432.webp' />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="توسعه کتابخانه با جاوااسکریپت" img='./images/img-product/1402-10-20-17.40.16_11zon-768x432.webp' />
                <Courses width='w-[21%]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' title="Data Visualization با پایتون" img='./images/img-product/ezgif.com-jpg-to-webp-converted-19-1-768x432.webp' />
            </div>
        </div>
    )
}
