import React from 'react'
//styles
import './styles/HeaderCV.css'
//components
import ContactCV from './ContactCV'

function HeaderCV (props) {
    const info = props.name.info
    const priv = [`${info.firstName} ${info.lastName}`, info.address, `${info.codeRegion} ${info.cellphone}`]
    const contact = props.name.contact
    const setShortName = (firstName, lastName) => {
        const shortName = `${firstName} ${lastName}`.split(' ')
        let len = shortName.length
        shortName.splice(len-1, len)
        return shortName.join(' ').toUpperCase()
    }
    return (
        <div className="row align-items-center">
            <div className="col" style={{textAlign: "left"}}>
                <header>{setShortName(info.firstName, info.lastName)}</header>
                <div className="subHeader">{info.jobProfile.toUpperCase()}</div>
            </div>
            <div className="col">
                <div id="info" style={{display: 'inline-table'}}>
                    <div className="title">Information</div>
                    <ul>
                        {priv.map((item, index)=>{
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
                <ContactCV values={contact} />
            </div>
        </div>
    )
}

export default HeaderCV