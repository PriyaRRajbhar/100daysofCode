import React from 'react';
import {useState} from 'react';

function State(){
    const [Count, setCount] = useState(0);

    return(
        <div>
            <p>STATE USING........</p>
            <button onClick={() => setCount(Count + 1)}>+</button>
            <span> {Count} </span>
            <button onClick={() => setCount(Count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default State;