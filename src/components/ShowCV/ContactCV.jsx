import React from 'react'
//styles
import './styles/ContactCV.css'

function ContactCV(props){
    const contactList = props.values
    return (
        <div id="contactContainer" style={{display: 'inline-table'}}>
            <div className="title">Contact</div>
            <ul>
                {contactList !== [{}] &&
                    contactList.map((item, index) => {
                        return (
                            <li key={index}>
                                <img src={item.icon} alt={item.userName} />
                                <a href={item.userName}>{item.contactService}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ContactCV