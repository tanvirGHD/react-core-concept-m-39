// state change in React

import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const reduce = () => {
        const newReduce = count - 1;
        setCount(newReduce)
    }

    return(
        <div style={{border: '2px solid green'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}

