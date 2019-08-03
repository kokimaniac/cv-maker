import React from 'react'

function SkillsCV (props) {
    const skills = props.name.skills
    return (
        <div id="skillsContainer">
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