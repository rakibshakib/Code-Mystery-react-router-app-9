import React from 'react'

const NotFound = () => {
    return (
        <div className='container mx-auto my-16'>
            <h2 className="text-center  text-3xl md:text-4xl lg:text-8xl mt-12 font-bold text-red-500">
                OoOps!
            </h2>
            <h2 className="text-center text-xl md:text-2xl lg:text-5xl my-5 font-bold">
                404 - Page Not Found 😫
            </h2>
            <h2 className="text-center text-sm lg:text-xl my-3 font-bold text-red-400">
                The Page You Were Looking For Couldn't Be Found.
            </h2>
        </div>
    )
}

export default NotFound
