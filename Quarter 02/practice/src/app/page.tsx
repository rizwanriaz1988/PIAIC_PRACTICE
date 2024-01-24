'use client'
import React from 'react'
import date from './data.json'
import { increment, decrement, reset } from './store/slice'
import { useDispatch, useSelector } from 'react-redux'



function Counter() {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter App Using Redux Toolkit</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default Counter