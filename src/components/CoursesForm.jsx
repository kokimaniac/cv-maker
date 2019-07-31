import React from 'react'
//component
import FormHeader from './FormHeader'
import SelectYear from './SelectYear.jsx'

function CoursesForm(props) {
    return (
        <React.Fragment>
            <FormHeader name="Courses" />
            <div className="form-row">
                <SelectYear idName="startCourse" name="start at" />
                <SelectYear idName="endCourse" name="end at" />
                <div className="form-group col">
                    <input
                    type="text"
                    name="institute"
                    id="institute"
                    placeholder="Institute name"
                    className="form-control"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <input
                    type="text"
                    name="course"
                    id="course"
                    className="form-control"
                    placeholder="Name of the career you've taken"
                    />
                </div>
                <div className="form-group col">
                    <input
                    type="text"
                    name="modules"
                    id="modules"
                    className="form-control"
                    placeholder="If corresponds add the course modules separated by commas"
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

export default CoursesForm