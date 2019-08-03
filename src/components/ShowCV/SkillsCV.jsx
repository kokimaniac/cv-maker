import React from 'react'
//component
import IconCV from './IconCV.jsx'
//icon
import icon from '../icons/skills.png'

function SkillsCV (props) {
    const skills = props.name.skills
    return (
        <div id="skillsContainer">
            <IconCV source={icon} name="skills" />
            <div className="title">Habilidades</div>
            {skills.map(item=>{
                return (
                    <div key={item.id}>
                        <b className="subTitle">{item.category}</b>
                        <ul>
                            {item.skills.map((item, index)=>{
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillsCV