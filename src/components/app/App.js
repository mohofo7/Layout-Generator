import React from 'react';
import './App.css';
import DropDown from './../dropdown/dropdown'
import Container from './../container/container'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <DropDown />
        <Container />
      </div>
    )
  }
}

export default App;
