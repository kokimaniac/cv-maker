import React from 'react'

import FormHeader from './FormHeader'

function EducationForm (props) {
    let years = []
    for(let i=1950; i<2020; i++) {
        years.push(i)
    }
    return (
        <React.Fragment>
            <FormHeader name="Education Form" />
            <div className="form-row">
                <div className="form-group col-2">
                    <select name="startEducation" className="form-control"
                    id="startEducation">
                        <option>start at</option>
                        {years.map(item=><option value={item}>{item}</option>)}
                    </select>
                </div>
                <div className="form-group col-2">
                    <select name="endEducation" className="form-control"
                    id="endEducation">
                        <option>ended at</option>
                        {years.map(item=><option value={item}>{item}</option>)}
                        <option value="-">on course</option>
                    </select>
                </div>
                <div className="form-group col">
                    <input
                    type="text"
                    name="institution"
                    id="institution"
                    className="form-control"
                    placeholder="Study institution name"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <input
                    type="text"
                    name="degree"
                    id="degree"
                    className="form-control"
                    placeholder="Title degree (eg): Computer Science Degree"
                    />
                </div>
                <div className="form-group col">
                    <input
                    type="text"
                    name="career"
                    id="career"
                    className="form-control"
                    placeholder="Career name"
                    />
                </div>
                <div className="form-group col-2">
                    <button className="btn btn-outline-primary" onClick={props.onClick}>
                        add item
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EducationForm