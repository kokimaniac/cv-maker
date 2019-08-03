import React from 'react'
//components
import FormHeader from './FormHeader'
//icons
import githubLogo from './icons/github-logo.png'
import gitlabLogo from './icons/gitlab-logo.png'
import twitterLogo from './icons/twitter-logo.png'
import outlookLogo from './icons/outlook-logo.png'
import gmailLogo from './icons/gmail-logo.png'
import yahooLogo from './icons/yahoo-logo.png'
import wordpressLogo from './icons/wordpress-logo.png'
import linkedinLogo from './icons/linkedin-logo.png'

function InfoForm (props) {
    const codes = [
        { code: "+591", country: "Bolivia"},
        { code: "+57", country: "Colombia" },
        { code: "+593", country: "Ecuador" },
        { code: "+595", country: "Paraguay" },
        { code: "+51", country: "Perú" },
        { code: "+598", country: "Uruguay" },
        { code: "+58", country: "Venezuela" }
    ]
    const contacts = [
        {
            name: "Twitter",
            icon: twitterLogo
        }, {
            name: "GMail",
            icon: gmailLogo
        }, {
            name: "Outlook",
            icon: outlookLogo
        }, {
            name: "Yahoo!",
            icon: yahooLogo
        }, {
            name: "LinkedIn",
            icon: linkedinLogo
        }, {
            name: "GitHub",
            icon: githubLogo
        }, {
            name: "GitLab",
            icon: gitlabLogo
        }, {
            name: "WordPress",
            icon: wordpressLogo
        }
    ]
    return (
        <React.Fragment>
            <FormHeader name="Information" />
            <label>Job Profile</label>
            <div className="form-row">
                <div className="form-group col">
                    <input
                    type="text"
                    className="form-control"
                    name="jobProfile"
                    placeholder="Your job profile (eg): Backend Developer"
                    id="jobProfile"
                    onChange={props.onChange}
                    value={props.formValues.jobProfile}
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
                    onChange={props.onChange}
                    value={props.formValues.firstName}
                    />
                </div>
                <div className="form-group col">
                    <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Your last name"
                    id="lastName"
                    onChange={props.onChange}
                    value={props.formValues.lastName}
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
                    onChange={props.onChange}
                    value={props.formValues.address}
                    />
                </div>
                <div className="form-group col-2">
                    <select className="form-control" name="codeRegion" id="codeRegion"
                    onChange={props.onChange}>
                        <option value="none" defaultValue={true}>-select-</option>
                        {codes.map((item, index) => {
                            return <option key={index} value={item.code}>{item.country}</option>
                        })}
                    </select>
                </div>
                <div className="form-group col-4">
                    <input
                    type="text"
                    name="cellphone"
                    className="form-control"
                    placeholder="Cellphone number with no country code"
                    id="cellphone"
                    onChange={props.onChange}
                    value={props.formValues.cellphone}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-2">
                    <select className="form-control" name="contactService" id="contactService">
                        {contacts.map((item, index)=>{
                            return (
                                <option key={index} value={item.icon}>
                                    {item.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col">
                    <input
                    type="text"
                    name="userName"
                    className="form-control"
                    placeholder="Fill this field with your email or url if corresponds"
                    id="userName"
                    />
                </div>
                <div className="form-group col-2">
                    <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={props.onClick}>add
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InfoForm