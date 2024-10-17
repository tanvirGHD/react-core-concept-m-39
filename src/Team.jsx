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
        border: '2px solid purple',
        margin: '45px',
        borderRadius: '12px',
        padding: '20px'

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