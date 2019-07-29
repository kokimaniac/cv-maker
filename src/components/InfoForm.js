import React, { Component } from 'react'
//components
import FormHeader from './FormHeader'
class InfoForm extends Component {
    render () {
        return (
            <React.Fragment>
                <FormHeader name="Information Form" />
                <form onSubmit={this.props.onSubmit}>
                    <label>Job Profile</label>
                    <div className="form-row">
                        <div className="form-group col">
                            <input
                            type="text"
                            className="form-control"
                            name="jobProfile"
                            placeholder="Your job profile (eg): Backend Developer"
                            />
                        </div>
                    </div>
                    <label>First and last name</label>
                    <div className="form-row">
                        <div className="form-group col">
                            <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            placeholder="Your first name"
                            />
                        </div>
                        <div className="form-group col">
                            <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Your last name"
                            />
                        </div>
                    </div>
                    <label>Contact Information</label>
                    <div className="form-row">
                        <div className="form-group col">
                            <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Your address (format): Street/Zone. Name Street/Zone"
                            />
                        </div>
                        <div className="form-group col-2">
                            <select className="form-control" name="cellphone">
                                <option value="none" defaultValue={true}>-select-</option>
                                <option value="">Argentina</option>
                                <option value="">Brasil</option>
                                <option value="">Bolivia</option>
                                <option value="">Chile</option>
                                <option value="">Colombia</option>
                            </select>
                        </div>
                        <div className="form-group col-4">
                            <input
                            type="text"
                            name="cellphone"
                            className="form-control"
                            placeholder="Cellphone number with no country code"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-2">
                            <select className="form-control" name="contact">
                                <option value="GMail">gmail</option>
                                <option value="Outlook">outlook</option>
                                <option value="Yahoo">yahoo!</option>
                                <option value="GitHub">github</option>
                                <option value="GitLab">gitlab</option>
                                <option value="Wordpress">wordpPress</option>
                                <option></option>
                            </select>
                        </div>
                        <div className="form-group col">
                            <input
                            type="text"
                            name="contact"
                            className="form-control"
                            placeholder="Put your email or username that belongs to the service"
                            />
                        </div>
                        <div className="form-group col-2">
                            <button type="button" className="btn btn-outline-primary">add</button>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <button className="btn btn-primary">
                                Confirm
                            </button>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default InfoForm