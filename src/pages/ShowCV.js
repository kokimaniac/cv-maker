import React, { Component } from 'react'
//import md5 from 'md5'
//components
import HeaderCV from '../components/ShowCV/HeaderCV'
import EducationCV from '../components/ShowCV/EducationCV.jsx'
import CoursesCV from '../components/ShowCV/CoursesCV.jsx'
import ExperienceCV from '../components/ShowCV/ExperienceCV.jsx'
import SkillsCV from '../components/ShowCV/SkillsCV.jsx'

class ShowCV extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderCV name={this.props.values} />
                <div className="row">
                    <div className="col">
                        <ExperienceCV name={this.props.values} />
                        <EducationCV items={this.props.values} />
                        <CoursesCV items={this.props.values} />
                    </div>
                    <div className="col">
                        <SkillsCV name={this.props.values} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ShowCV