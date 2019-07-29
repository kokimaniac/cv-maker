import React from 'react'

function Header(props) {
    return (
        <header className="display-1">{props.name}</header>
    )
}

export default Header