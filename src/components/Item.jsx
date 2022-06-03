import React, { useState } from 'react'

export default function Item(props) {
    const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);
    return (
        <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} className="item">
            <img src={props.image} alt="" width="70px" className="me-3" />
            <p className={hovered ? "h4 mt-1" : "d-none"}>{props.title}</p>
        </div>
    )
}
