import React, { useState } from 'react'
import './Counter.css'

export const Counter = (props) => {

  const [countState, setCountState] = useState({
    count: 0,
    lastUpdate: new Date().toLocaleString()
  });

  const animal = props.animal ?? 'Sheep';
        
  const addOne = () => {
    setCountState((curr) => ({
      count: curr.count + 1,
      lastUpdate: new Date().toLocaleString()
    }));
    props.onIncrement();
  };

  return (
    <div className='counter'>
      <div className='count'>{countState.count} {animal}</div>
      <button className='btn' onClick={addOne}>NEXT</button>
    </div>
  )
}

export default Counter