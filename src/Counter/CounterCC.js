import React, { Component } from 'react'
import './Counter.css'

export class Counter extends Component {

  // INITIALIZE as reserved class property
  state = {
    count: 0,
    lastUpdate: new Date().toLocaleString()
  };

  render() {
    const animal = this.props.animal ?? 'Sheep';
        
    const addOne = () => {
      // UPDATE with reserved class method
      this.setState({
        count: this.state.count + 1,
        lastUpdate: new Date().toLocaleString()
      })
      this.props.onIncrement();
    };

    return (
      <div className='counter'>
        <div className='count'>{this.state.count} {animal}</div>
        <button className='btn' onClick={addOne}>NEXT</button>
      </div>
    )
  }
}

export default Counter