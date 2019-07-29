import React from 'react'

function FormHeader (props) {
    const style = {
        backgroundColor: 'rgb(200, 200, 244)'
    }
    return (
        <header style={style} className="display-4">{props.name}</header>
    )
}

export default FormHeader