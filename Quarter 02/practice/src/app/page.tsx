'use client'
import React, { useState } from 'react'
import date from './data.json'
import { increment, decrement, reset } from './store/slice'
import { useDispatch, useSelector, } from 'react-redux'



function Counter() {
  const [items, setItems] = useState([
  { id: 1, counter: 0 },
  { id: 2, counter: 0 },
  // ... other items
]);

// const handleIncrement = (itemId: number) => {
//   setItems((prevItems) =>
//     prevItems.map((item) =>
//       item.id === itemId ? { ...item, counter: item.counter + 1 } : item
//     )
//   );
// };

const handleIncrement = (itemId: number) => {
  setItems(
  items.map((item) =>
      item.id === itemId ? { ...item, counter: item.counter + 1 } : item
    
  ));
};

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.counter}</h1>
          <button onClick={() => handleIncrement(item.id)} className='bg-blue-500'>Increment</button>
        </div>
      ))}
        
    </div>
  )
}

export default Counter