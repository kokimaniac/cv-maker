import React, { Component } from 'react'
import md5 from 'md5'
//components
import Header from './components/Header'
import InfoForm from '../components/InfoForm.jsx'
import EducationForm from '../components/EducationForm.jsx'
import SkillsForm from '../components/SkillsForm.jsx'
import CoursesForm from '../components/CoursesForm.jsx'
import ExperienceForm from '../components/ExperienceForm.jsx'

class MakeCV extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleInfoClick = this.handleInfoClick.bind(this)
        this.handleEducationClick = this.handleEducationClick.bind(this)
        this.handleCourseClick = this.handleCourseClick.bind(this)
        this.handleSkillClick = this.handleSkillClick.bind(this)
        this.handleExperienceClick = this.handleExperienceClick.bind(this)
        this.state = {
            info: {
                firstName: '',
                lastName: '',
                jobProfile: '',
                address: '',
                codeRegion: '',
                cellphone: '',
            },
            contact: [],
            education: [],
            courses: [],
            skills: [],
            experience: [],
        }
    }

    handleInfoClick = () => {
        let data = {
            id: md5(`in${this.state.contact.length}`),
            userName: document.getElementById("userName").value,
            contactService: document.getElementById("contactService").value
        }

        this.setState(prevState=>({
            contact: [
                ...prevState.contact, {...data}
            ]
        }))
    }

    handleCourseClick = () => {
        const data = {
            id: md5(`co${this.state.courses.length}`),
            institute: document.getElementById("institute").value,
            course: document.getElementById("course").value,
            modules: document.getElementById("modules").value.split(','),
            start: document.getElementById("startCourse").value,
            end: document.getElementById("endCourse").value
        }
        this.setState(prevState=>({
            courses: [
                ...prevState.courses, { ...data }
            ]
        }))
    }

    handleEducationClick = () => {
        const data = {
            id: md5(`ed${this.state.education.length}`),
            startEducation: document.getElementById("startEducation").value,
            endEducation: document.getElementById("endEducation").value,
            degree: document.getElementById("degree").value,
            institution: document.getElementById("institution").value,
            career: document.getElementById("career").value
        }
        this.setState(prevState=>({
            education: [
                ...prevState.education, { ...data }
            ]
        }))
    }

    handleSkillClick = () => {
        const data = {
            id: md5(`sk${this.state.skills.length}`),
            category: document.getElementById("category").value,
            skills: document.getElementById("skills").value.split(',')
        }
        this.setState(prevState=>({
            skills: [
                ...prevState.skills, { ...data }
            ]
        }))
    }

    handleExperienceClick = () => {
        const data = {
            id: md5(`ex${this.state.experience.length}`),
            startJob: document.getElementById("startJob").value,
            endJob: document.getElementById("endJob").value,
            company: document.getElementById("company").value,
            jobPosition: document.getElementById("jobPosition").value
        }
        this.setState(prevState=>({
            experience: [
                ...prevState.experience, { ...data }
            ]
        }))
    }


    handleChange = e => {
        const key = e.target.name
        let value = e.target.value
        this.setState(prevState=>({
            info: {
                ...prevState.info, [key]: value
            }
        }))
    }

    render () {
        return (
            <React.Fragment>
                <Header name="Make CV" />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <InfoForm
                            onClick={this.handleInfoClick}
                            onChange={this.handleChange}
                            formValues={this.state.info}
                            />
                            <EducationForm onClick={this.handleEducationClick} />
                            <CoursesForm onClick={this.handleCourseClick} />
                            <SkillsForm onClick={this.handleSkillClick} />
                            <ExperienceForm onClick={this.handleExperienceClick} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MakeCV