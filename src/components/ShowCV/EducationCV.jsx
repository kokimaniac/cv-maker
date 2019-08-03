import React from 'react'

function EducationCV (props) {
    const edu = props.items.education
    return (
        <div id="educationContainer">
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