import React from 'react'
import Titlecourses from '../Titlecourses/Titlecourses'
import Slider from '../Slider/Slider'

export default function Popularcourses() {
    return (
        <div className='container mx-auto'>
            <Titlecourses
                colorSpan='bg-green-500'
                titleSection='پرطرفدارترین دوره ها'
                descSection='دوره های محبو و پروژه محور سبزلرن'
                btn='btn-arrow'
            />
            <Slider />
        </div>
    )
}
