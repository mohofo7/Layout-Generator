import React from 'react'
import './dropdown.css'
class DropDown extends React.Component {

    constructor(props){
        super(props)
        this.selectAnOption = this.selectAnOption.bind(this)
        this.state = {
            options: ["XL", "2XL", "4L", "XL/2L", "XL/L/2SM"]
        }
    }
    selectAnOption(e){
        this.props.selectLayout(e.target.value)
    }
    render(){
        const options = this.state.options.map((opt)=>
            <option key={opt} value={opt}>{opt}</option>
        )
        return (
            <div className="selectContainer">
                <select onChange={this.selectAnOption}>
                    {options}
                </select>
            </div>
        )
    }
}

export default DropDown