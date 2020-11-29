import React from 'react'
import './Card.css'

export default props => {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}