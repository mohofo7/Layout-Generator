import React from 'react'
import './slot.scss'

function Slot(props){
    return (
        <div className={props.slotType}>
            {props.slotType}
        </div>
    )
}

export default Slot