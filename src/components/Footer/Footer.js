import React from 'react';
import './Footer.css';
import img from '../../images/white.png';
import google from '../../images/googlePlay.png'

// simple footer 
const Footer = () => {
    return (
        <div className="footer mt-5">
            <div className='container mx-auto py-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center text-gray-300 py-5'>
                    <div className='leading-relaxed footer-text text-center md:text-left'>
                        <figure>
                            <img src={img} alt="" />
                        </figure>
                        <p className='mt-5'>Emai: contact@codemystrey.com</p>
                        <p>Phone: +880 125634789</p>
                        <p>Address: Banani Dhaka, Bangladesh</p>
                        <img className='mt-5 w-2/3' src={google} alt="" />
                    </div>
                    <div className='leading-relaxed footer-text text-center md:text-left'>
                        <h2 className='font-semibold text-gray-200 text-xl mb-5'>Company</h2>
                        <p>Privacy policy</p>
                        <p>Terms of use</p>
                        <p>Refund policy</p>
                    </div>
                    <div className='leading-relaxed footer-text text-center md:text-left'>
                        <h2 className='font-semibold text-gray-200 text-xl mb-5'>Crash Course</h2>
                        <p> SSC Crash Course 2022</p>
                        <p> HSC Crash Course 2021</p>
                        <p> HSC Crash Course 2022</p>
                        <p> Pre Admission Medical 2021</p>
                    </div>
                    <div className='leading-relaxed footer-text text-center md:text-left'>
                        <h2 className='font-semibold text-gray-200 text-xl mb-5'>Popular</h2>
                        <p> ঘরে বসে Spoken English</p>
                        <p> English Grammar</p>
                        <p> Microsoft PowerPoint</p>
                        <p>Facebook Marketing</p>
                    </div>
                </div>
                <hr />
                <p className="text-center text-gray-200 my-2">All Right Reserved &copy; Coding Mystrey - 2021 </p>
            </div>
        </div>
    )
}

export default Footer
