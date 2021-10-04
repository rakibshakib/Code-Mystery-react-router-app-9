import React from 'react';
import bannerImg from '../../images/banner1.svg'


const Banner = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-items-center py-5 mx-2 my-5 custom-bg rounded-md'>
            <div className='ml-2'>
                <h2 className='text-3xl md:text-6xl font-semibold my-3'>Be A Professional <span className='text-red-500'>Programmer!</span></h2>
                <p className='text-2xl md:text-4xl font-semibold my-2'>with <span className='text-red-500'>Code Mystery</span></p>
                <p className='text-sm mt-5'>From scratch, this course will easily swallow everything you need to become a professional web developer without any prior experience.</p>
            </div>
            <div>
                <img className=' p-5' src={bannerImg} alt="" />
            </div>
        </div>
    )
}

export default Banner
