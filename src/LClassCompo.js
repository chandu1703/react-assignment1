import React from 'react'
import Inline1 from './Inline1'

class LClassCompo extends React.Component {
  render() {
    return (
      <div className="box2">
        <p className="third">This is created using class Component</p>
        <p className="fourth">This is done using external CSS</p>
        <Inline1 />
      </div>
    )
  }
}

export default LClassCompo