import React from 'react'
import './Title.css'

export const Title = (props) => {
  
  // props passed in explicitly
  const message = props.message ?? 'Welcome to React';

  return (
    <div className='title'>{message}</div>
  );
}

export default Title