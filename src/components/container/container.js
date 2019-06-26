import React from 'react'
import Slot from './../slot/slot'
import parseString from './../../utils/parseString'
class container extends React.Component{

    render(){
        let parsedString = parseString(this.props.layoutString)
        console.log(parsedString)
        let slots = parsedString.map((slot)=>
            <Slot className = {slot}/>
        )
        return (
            <div>{slots}</div>
        )
    }
}

export default container