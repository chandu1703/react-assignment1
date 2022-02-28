import React from 'react'
import LFuncCompo from './LFuncCompo'
import LClassCompo from './LClassCompo'
import './myStyle1.css'

class App extends React.Component {
  state = {
    showClass: false,
    showFunc: false
  }
  render() {
    return (
      <div>
        <h1 className="minus">Styling using Functional and Class Component</h1>
        <button onClick = {() => this.setState({showFunc : !this.state.showFunc}) } className="first">To see styling in functional component</button>
        <button onClick={() => this.setState({showClass : !this.state.showClass})} className="second">To see styling in class component</button>
        {this.state.showFunc && <LFuncCompo /> }
        {this.state.showClass && <LClassCompo />}
      </div>
    )
  }
}

export default App