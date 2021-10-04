import React from 'react'
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
            <h2 className="text-center text-3xl font-medium my-3">See Our Special Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center py-5">
                {
                    courseData.slice(0, 4).map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>

        </div>
    )
}

export default Courses
