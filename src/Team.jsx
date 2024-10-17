import { useState } from "react"

export default function Team() {
    const [count , setCount] = useState(11);

    const handleCount = () =>{
        const newAdd = count + 1;
        setCount(newAdd)
    }

    const removeMember = () => {
        setCount(count-1)
    }
    
    const styles = {
        border: '2px solid red',
        margin: '45px',
        borderRadius: '12px',
        padding: '6px'

    }
    return(
        <>
        <div style={styles}>
            <h3>Total Team Member:{count} </h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={removeMember}>Remove</button>
        </div>
        </>
    )
} 