import React, { Component } from 'react'
import md5 from 'md5'
//components
import Header from './components/Header'
import InfoForm from '../components/InfoForm'
import EducationForm from '../components/EducationForm'

class MakeCV extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleInfoClick = this.handleInfoClick.bind(this)
        this.handleEducationClick = this.handleEducationClick.bind(this)
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
            education: []
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(e.target)
    }
    handleInfoClick() {
        const userName = document.getElementById("userName")
        let contactService = document.getElementById("contactService")
        let data = {
            id: md5(`c${this.state.contact.length}`),
            userName: userName.value,
            contactService: contactService.value
        }

        this.setState(prevState=>({
            contact: [
                ...prevState.contact, {...data}
            ]
        }))
    }

    handleEducationClick = () => {
        const career = document.getElementById("career")
        const start = document.getElementById("startEducation")
        const end = document.getElementById("endEducation")
        const degree = document.getElementById("degree")
        const institution = document.getElementById("institution")
        const data = {
            id: md5(`e${this.state.education.length}`),
            startEducation: start.value,
            endEducation: end.value,
            degree: degree.value,
            institution: institution.value,
            career: career.value
        }
        this.setState(prevState=>({
            education: [
                ...prevState.education, { ...data }
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
                            onSubmit={this.handleSubmit}
                            onClick={this.handleInfoClick}
                            onChange={this.handleChange}
                            formValues={this.state.info}
                            />
                            <EducationForm
                            onClick={this.handleEducationClick}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MakeCV