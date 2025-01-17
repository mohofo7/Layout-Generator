import React from 'react';
import './App.css';
import DropDown from './../dropdown/dropdown'
import Container from './../container/container'

class App extends React.Component {

  constructor(props){
    super(props)
    this.selectLayout = this.selectLayout.bind(this)
    this.state = {
      layoutString : 'XL' //Default Value
    }
  }

  selectLayout(option){
    this.setState(()=>{
      return{
        layoutString : option
      }
    })
  }

  render(){
    return (
      <div className="App">
        <h2 className="title">Layout Generator</h2>
        <h6 className="subtitle">Select : </h6>
        <DropDown selectLayout={this.selectLayout}/>
        <Container layoutString={this.state.layoutString}/>
      </div>
    )
  }
}

export default App;
