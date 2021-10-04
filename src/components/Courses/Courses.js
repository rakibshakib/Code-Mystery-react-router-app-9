import React from 'react'
import { Link } from 'react-router-dom'
import useCourse from '../../Hooks/UseCourse/useCourse'
import Banner from '../Banner/Banner'
import Course from '../Course/Course'
import './Courses.css'

const Courses = () => {
    const [courseData] = useCourse();
    return (
        <div className='container mx-auto'>
            <div>
                <Banner></Banner>
            </div>
            <h2 className="text-center text-3xl font-semibold my-5">See Our Special Courses</h2>
            {
                courseData.length === 0 ? <button type="button" className="bg-rose-600" disabled>
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    </svg>
                    Processing
                </button> :
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center py-5">
                        {
                            courseData.slice(0, 4).map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </div>
            }

            <h2 className='hover:bg-gray-700 hover:text-white text-center border md:w-2/5 py-1 bg-red-500 text-white font-semibold rounded-md mx-auto'><Link to='/service'>See All Courses</Link></h2>


        </div>
    )
}

export default Courses
