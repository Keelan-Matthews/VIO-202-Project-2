import React from 'react'

export default function Item(props) {
    return (
        <div>
            <img src={props.image} alt="" width="70px" className="me-3" />
        </div>
    )
}
