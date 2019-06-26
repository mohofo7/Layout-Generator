import React from 'react'
import Slot from './../slot/slot'
import parseString from './../../utils/parseString'
import './container.scss'
class container extends React.Component{

    generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }
    render(){
        let parsedString = parseString(this.props.layoutString)
        let x = 0
        let slots = parsedString.map((slot)=>{
            x++;
            if(slot === 'SM')
                return <div key={slot + x.toString()} className="SMwidth"><Slot slotType={slot}/></div>
            else return <div key={slot + x.toString()} className="XLLwidth"><Slot slotType={slot}/></div>
        })
        return (
            <div className="cont">{slots}</div>
        )
    }
}

export default container