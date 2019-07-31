import React from 'react'

function SelectYear (props) {
    let years = []
    for(let i=1950; i<2020; i++) {
        years.push(i)
    }
    return (
        <div className="form-group col-2">
            <select name={props.idName} className="form-control" id={props.idName}>
                <option>{props.name}</option>
                {years.map((item, index)=>{
                    return <option key={index} value={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default SelectYear