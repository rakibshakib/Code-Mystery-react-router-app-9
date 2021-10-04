import React from 'react';
import banner4 from '../../images/banner4.svg'

const AboutUs = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 justify-items-center py-5">
                <figure>
                    <img className='p-5 w-3/5 mx-auto' src={banner4} alt="" />
                </figure>
                <div>
                    <h2 className='text-xl md:text-3xl py-5 text-red-500 font-semibold'>About Coding Mystery</h2>
                    <p className='py-3'>Coding Mystery is a Online Programming Learning Community where every one can learn the popular tecnology.We are the pioneer to launch the First-ever Online Support Center for Everyone absolutely Free. Our online and offline learning platforms along with the support platforms will help one learn technology and creative skills to achieve personal and professional goals. Students can enroll in our courses from anywhere in the world and have access to our wide range of services. Working as a freelancer knows no age limit; having a skill set is enough to start earning from home. With the help of our active, dedicated, committed and passionate Team of Professionals, anyone can develop his/her skills and build a good rapport for thyself and also a freelancer can find the best freelance working opportunities as well as can maintain good affinity with one’s customers and clients by building a strong portfolio.</p>
                    <p className='font-medium'>Emai: contact@codemystrey.com</p>
                    <p className='font-medium'>Phone: +880 125634789</p>
                    <p className='font-medium'>Address: Banani Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
