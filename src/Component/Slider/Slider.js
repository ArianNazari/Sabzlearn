import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Courses from '../courses/Courses';
import { useSwiper } from 'swiper/react';
export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"

                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/ezgif.com-jpg-to-webp-converted-10-1-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/IMAGE-1402-12-24-13_42_44-1-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/IMAGE-1402-12-24-13_42_44-1-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/ezgif.com-jpg-to-webp-converted-32-1-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img="./images/img-product/Course-thumbnail-Algorithm-1-768x432.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/ezgif.com-jpg-to-webp-converted-20-1-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/IMAGE-1402-11-04-18_57_18-1-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/IMAGE-1403-02-20-17_14_44_11zon-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/elec-1-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/IMAGE-1403-02-20-17_59_09_11zon-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/ezgif.com-jpg-to-webp-converted-32-1-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/1402-10-20-17.40.16_11zon-768x432.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Courses width='w-[330px]' desc='عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این دوره…' img='./images/img-product/ezgif.com-jpg-to-webp-converted-19-1-768x432.webp' />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
