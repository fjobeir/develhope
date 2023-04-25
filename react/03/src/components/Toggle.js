import { useState } from "react"

function Toggle() {
    let [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }
    return (
        <div>
            {show && <p>you see this paragraph</p>}
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

export default Toggle;