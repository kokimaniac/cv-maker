import React from 'react'
//styles
import './styles/IconCV.css'

function LogoCV (props) {
    return (
        <img
        className="iconCV"
        src={props.source}
        alt={props.name}
        />
    )
}

export default LogoCV