import React from 'react'
import Slot from './../slot/slot'
import parseString from './../../utils/parseString'
import './container.css'
class container extends React.Component{

    render(){
        let parsedString = parseString(this.props.layoutString)
        let slots = parsedString.map((slot)=>{
            return <Slot slotType={slot}/>
        })
        return (
            <div className="container">{slots}</div>
        )
    }
}

export default container