import React from 'react'
import Slot from './../slot/slot'
import parseString from './../../utils/parseString'
import './container.scss'
class container extends React.Component{

    render(){
        let parsedString = parseString(this.props.layoutString)
        let slots = parsedString.map((slot)=>{
            if(slot === 'SM')
                return <div className="SMwidth"><Slot slotType={slot}/></div>
            else return <div className="XLLwidth"><Slot slotType={slot}/></div>

        })
        return (
            <div className="cont">{slots}</div>
        )
    }
}

export default container