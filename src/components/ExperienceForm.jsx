import React from 'react'
//components
import FormHeader from './FormHeader'
import SelectYear from './SelectYear.jsx'

function ExperienceForm (props) {
    return (
        <React.Fragment>
            <FormHeader name="Experience" />
            <div className="form-row">
                <SelectYear idName="startJob" name="started at" />
                <SelectYear idName="endJob" name="ended at" />
                <div className="form-group col">
                    <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Name of the company where you work for"
                    className="form-control"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <textarea
                    id="jobResume"
                    name="jobResume"
                    className="form-control"
                    placeholder="Write shortly gained experience on the job."
                    rows="5"
                    onChange={props.onChange}
                    wrap="hard"
                    ></textarea>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <input
                    type="text"
                    name="jobPosition"
                    id="jobPosition"
                    className="form-control"
                    placeholder="Job position you had in this company"
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

export default ExperienceForm