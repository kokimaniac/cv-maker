import React from 'react'
//component
import IconCV from './IconCV.jsx'
//icon
import icon from '../icons/courses.png'

function CoursesCV (props) {
    const coursesList = props.items.courses
    return (
        <div id="coursesContainer">
            <IconCV source={icon} name="courses" />
            <div className="title">Courses</div>
            <ul>
                {coursesList.map(item=>{
                    return (
                        <div key={item.id}>
                            <div className="subTitle">
                                {item.institute}, {item.start} - {item.end}
                            </div>
                            <li key={item.id}>
                                <p className="content">{item.course}</p>
                                <ul>
                                    {item.modules.map((item, index)=>(
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default CoursesCV