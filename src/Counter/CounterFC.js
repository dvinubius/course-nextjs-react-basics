import React, { useState } from 'react'
import './Counter.css'

export const Counter = (props) => {

  const [count, setCount] = useState({
    value: 0,
    lastUpdate: new Date().toLocaleString()
  });

  const animal = props.animal ?? 'Sheep';
  
  const addOne = () => {
    setCount((curr) => ({
      value: curr.value + 1,
      lastUpdate: new Date().toLocaleString()
    }));
  };
  
  const cloudItems = new Array(count.value).fill('☁️').map((cloud, idx) => ({ cloud, idx }));

  return (
    <div className='counter'>
      <div className='count'>{count.value} {animal}</div>
      <button className='btn' onClick={addOne}>INC</button>
      <div className='clouds'>
        {cloudItems.map((cloudItem) => (
          <div key={cloudItem.idx}>{cloudItem.cloud}</div>
        ))}
      </div>
    </div>
  )
}

export default Counter