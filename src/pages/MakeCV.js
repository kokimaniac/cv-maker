import React, { Component } from 'react'
import md5 from 'md5'
//components
import Header from './components/Header'
import InfoForm from '../components/InfoForm'

class MakeCV extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.info = {
            contact: []
        }
        this.state = {
            info: {
                firstName: '',
                lastName: '',
                jobProfile: '',
                address: '',
                codeRegion: '',
                cellphone: '',
            },
            contact: []
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log()
    }
    handleClick() {
        const userName = document.getElementById("userName")
        let contactService = document.getElementById("contactService")
        let data = {
            id: md5(this.state.contact.length),
            userName: userName.value,
            contactService: contactService.value
        }
        //this.info.contact.push({ ...data })
        //console.log(this.info.contact)
        this.setState(prevState=>({
            contact: [
                ...prevState.contact, {...data}
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
                            onClick={this.handleClick}
                            onChange={this.handleChange}
                            formValues={this.state.info}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MakeCV