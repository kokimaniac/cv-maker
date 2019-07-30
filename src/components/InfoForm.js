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
                            id="jobProfile"
                            onChange={this.props.onChange}
                            value={this.props.formValues.jobProfile}
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
                            id="firstName"
                            onChange={this.props.onChange}
                            value={this.props.formValues.firstName}
                            />
                        </div>
                        <div className="form-group col">
                            <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Your last name"
                            id="lastName"
                            onChange={this.props.onChange}
                            value={this.props.formValues.lastName}
                            />
                        </div>
                    </div>
                    <label>Contact Information</label>
                    <div className="form-row">
                        <div className="form-group col">
                            <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Your address (format): Street/Zone. Name Street/Zone"
                            id="address"
                            onChange={this.props.onChange}
                            value={this.props.formValues.address}
                            />
                        </div>
                        <div className="form-group col-2">
                            <select className="form-control" name="codeRegion" id="codeRegion"
                            onChange={this.props.onChange}>
                                <option value="none" defaultValue={true}>-select-</option>
                                <option value="+591">Bolivia</option>
                                <option value="+55">Brasil</option>
                                <option value="+57">Colombia</option>
                                <option value="+593">Ecuador</option>
                                <option value="+595">Paraguay</option>
                                <option value="+51">Perú</option>
                                <option value="+598">Uruguay</option>
                                <option value="+58">Venezuela</option>
                            </select>
                        </div>
                        <div className="form-group col-4">
                            <input
                            type="text"
                            name="cellphone"
                            className="form-control"
                            placeholder="Cellphone number with no country code"
                            id="cellphone"
                            onChange={this.props.onChange}
                            value={this.props.formValues.cellphone}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-2">
                            <select className="form-control" name="contactService" id="contactService">
                                <option value="GMail">GMail</option>
                                <option value="Outlook">Outlook</option>
                                <option value="Yahoo">Yahoo!</option>
                                <option value="GitHub">GitHub</option>
                                <option value="GitLab">GitLab</option>
                                <option value="Twitter">Twitter</option>
                                <option value="Wordpress">wordpPress</option>
                            </select>
                        </div>
                        <div className="form-group col">
                            <input
                            type="text"
                            name="userName"
                            className="form-control"
                            placeholder="Put your email or username that belongs to the service"
                            id="userName"
                            />
                        </div>
                        <div className="form-group col-2">
                            <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={this.props.onClick}>add
                            </button>
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