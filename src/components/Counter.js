import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

function Counter() {

    const counter1 = useSelector(state=>state.counterReducer.counter);
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({
            type: 'counter/increment'
        })
    }

    const decrement = () => {
        dispatch({
            type: 'counter/decrement'
        })
    }
    return (
        <div>
            <h2>Counter :{counter1}</h2>
            <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
        </div>
    )
}
export default Counter;