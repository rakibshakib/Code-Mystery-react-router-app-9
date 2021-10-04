import React from 'react';
import './Course.css'
const Course = (props) => {
    // destructuring data 
    const { course_name, image, inctructor, deadline, videos, payment } = props.course
    return (
        <div>
            {/* single card component  */}
            <div className="card p-5 m-5">
                <figure className='card-img'>
                    <img  src={image} alt="" />
                </figure>
                <div className="card-details mt-5 leading-relaxed">
                    <h2 className='text-red-500 font-bold text-xl'>{course_name}</h2>
                    <p>Inctructor: {inctructor}</p>
                    <p>Deadline: {deadline}</p>
                    <p>Total Video in This Course: {videos}</p>
                    <p>Course Fee: {payment} BDT</p>
                    <button className='px-2 rounded bg-green-500 text-white my-2 hover:bg-green-600'>Enroll Now</button>
                    <button className='px-2 rounded bg-yellow-300 text-black ml-2 my-2 hover:bg-yellow-400'>See Outline</button>
                </div>
            </div>
        </div>
    )
}
export default Course;
