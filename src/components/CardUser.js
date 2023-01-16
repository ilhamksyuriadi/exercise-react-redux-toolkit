import React from 'react'
import "./CardUser.css"

const CardUser = ({ name }) => {
    return (
        <div className='card-user'>
            {name}
        </div>
    )
}

export default CardUser