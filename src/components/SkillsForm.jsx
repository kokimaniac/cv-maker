import React from 'react'
//components
import FormHeader from './FormHeader'

function SkillsForm (props) {
    let categories = [
        "Language Programming", "System Administrator", "Platforms", "DevOp", "Dev Tools",
        "Frontend Development","Backend Development", "Mobile Application Development",
        "Desktop Applications Development"
    ]
    return (
        <React.Fragment>
            <FormHeader name="Skills" />
            <div className="form-row">
                <div className="form-group col-4">
                    <label>Skill category</label>
                    <select name="category" id="category" className="form-control">
                        {categories.map((item, index)=>{
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div className="form-group col">
                    <label>Skill list</label>
                    <input
                    type="text"
                    name="skills"
                    id="skills"
                    placeholder="Separate your skills with commas"
                    className="form-control"
                    />
                </div>
                <div className="form-group col-2">
                    <label>Add for category</label>
                    <button className="btn btn-outline-primary" onClick={props.onClick}>
                        add item
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SkillsForm