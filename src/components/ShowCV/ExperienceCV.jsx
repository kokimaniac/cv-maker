import React from 'react'
//styles
import './styles/ExperienceCV.css'
//components
import IconCV from './IconCV.jsx'
//icon
import logo from '../icons/experience.png'

function ExperienceCV (props) {
    const experienceList = props.name.experience
    return (
       <div id="experienceContainer">
            <IconCV source={logo} name="experience" />
            <div className="title">Experience</div>
            {experienceList.map(item=>{
                return (
                    <div key={item.id}>
                        <div className="subTitle">{item.company}, {item.start} - {item.end} </div>
                        <b>{item.jobPosition}</b>
                        <p>{item.jobResume}</p>
                    </div>
                )
            })}
       </div>
    )
}

export default ExperienceCV