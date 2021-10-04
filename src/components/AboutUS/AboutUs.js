import React from 'react';
import banner4 from '../../images/banner4.svg'

const AboutUs = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 justify-items-center py-5">
                <figure>
                    <img src={banner4} alt="" />
                </figure>
            </div>
        </div>
    )
}

export default AboutUs
