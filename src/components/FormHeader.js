import React from 'react'

function FormHeader (props) {
    const style = {
        outline: '1px solid gray',
        color: 'gray',
        padding: '10px 10px'
    }
    return (
        <header style={style} className="display-4 mb-2">{props.name}</header>
    )
}

export default FormHeader