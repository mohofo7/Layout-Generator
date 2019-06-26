import React from 'react'
import Slot from './../slot/slot'

class container extends React.Component{

    render(){
        return (
            <div>
                {this.props.layoutString}
                <Slot />
                <Slot />
            </div>
        )
    }
}

export default container