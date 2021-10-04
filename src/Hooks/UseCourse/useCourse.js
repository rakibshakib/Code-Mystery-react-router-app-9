import { useEffect } from "react";
import { useState } from "react";

const useCourse = () => {
    const [courseData, setCourseData] = useState([]);
    useEffect(()=>{
        fetch('./edu.json')
        .then(res=>res.json())
        .then(data=>setCourseData(data))
    }, [])
    return [courseData]
}
export default useCourse;