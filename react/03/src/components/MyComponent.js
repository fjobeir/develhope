import { useState } from "react"

function MyComponent() {
    let [counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <p>The value of counter is {counter}</p>
            <button onClick={increase}>Increase by one</button>
        </div>
    )
}

export default MyComponent;