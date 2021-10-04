import { useEffect } from "react";
import { useState } from "react";

const useCourse = () => {
    // this is custom hook for getting data from json file 
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetch('./edu.json')
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, [])
    return [courseData]
}
export default useCourse;