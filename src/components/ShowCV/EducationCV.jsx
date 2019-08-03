import React from 'react'
//component
import IconCV from './IconCV.jsx'
//icon
import icon from '../icons/education.svg'


function EducationCV (props) {
    const edu = props.items.education
    return (
        <div id="educationContainer">
            <IconCV source={icon} name="education" />
            <div className="title">Education</div>
            <ul>
                {edu.map((item, index)=>{
                    return (
                        <div key={index}>
                            <div className="subTitle">
                                {item.institution}, {item.startEducation} - {item.endEducation}
                            </div>
                            <li key={item.id}>
                                <p className="content">{item.degree}, {item.career}</p>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default EducationCV