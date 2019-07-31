import React from 'react'
//component
import FormHeader from './FormHeader'
import SelectYear from './SelectYear.jsx'

function EducationForm (props) {
    let years = []
    for(let i=1950; i<2020; i++) {
        years.push(i)
    }
    return (
        <React.Fragment>
            <FormHeader name="Education" />
            <div className="form-row">
                <SelectYear idName="startEducation" name="start at" />
                <SelectYear idName="endEducation" name="end at" />
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