import React, { Component } from 'react'
import './Welcome.css'

export class Welcome extends Component {
  render() {

    // props implicitly available
    const message = this.props.message ?? 'Welcome to React';

    return (
      <div className='welcome'>{message}</div>
    )
  }
}

export default Welcome