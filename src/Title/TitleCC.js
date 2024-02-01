import React, { Component } from 'react'
import './Title.css'

export class Title extends Component {
  render() {

    // props implicitly available
    const message = this.props.message ?? 'Welcome to React';

    return (
      <div className='title'>{message}</div>
    )
  }
}

export default Title