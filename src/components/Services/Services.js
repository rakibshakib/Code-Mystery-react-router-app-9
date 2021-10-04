import React from 'react'
import useCourse from '../../Hooks/UseCourse/useCourse';
import ServiceData from '../ServiceData/ServiceData';

const Services = () => {
    const [courseData] = useCourse();

    return (
        <div className='container mx-auto'>
            <h2 className='text-red-500 text-xl my-2'>See Our All Courses: {courseData.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center py-5">
                {
                    courseData.map(course => <ServiceData key={course.id} course={course}></ServiceData>)
                }
            </div>
        </div>
    )
}

export default Services
