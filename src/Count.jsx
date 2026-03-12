import { useState } from "react";

export default function Count () {
    const [count , setCount] = useState(0);

    const handleAdd = () =>{
        const newState = count + 1;
        setCount(newState)
    }
    const countStyle ={
        border:'2px solid green'
    }
    return (
        <div style={countStyle}>
            <p>count: {count}</p>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}