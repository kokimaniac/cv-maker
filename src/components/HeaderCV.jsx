import React from 'react'

function HeaderCV (props) {
    let style = {
        headerContainer : {
            border: '3px solid black',
        },
        header: {
            fontSize: '80px',
            paddingTop: '20px',
            paddingBottom: '20px',
            textAlign: 'center',
        },
        subHeader: {
            fontSize: '22px',
        }
    }
    return (
        <div style={style.headerContainer}>
            <header style={style.header}>
                Web Developer
            </header>
            <div style={style.subHeader}>
                info in here
            </div>
        </div>
    )
}

export default HeaderCV