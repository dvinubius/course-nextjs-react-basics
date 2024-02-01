import React from 'react'
import './Welcome.css'

export const Welcome = (props) => {

  // props passed in explicitly
  const message = props.message ?? 'Welcome to React';

  return (
    <div className='welcome'>{message}</div>
  );
}

export default Welcome