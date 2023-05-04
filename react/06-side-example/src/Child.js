const Child = (props) => {
    const increase = () => {
        props.setCounter((counter) => {
            return counter + 1
        })
    }
    return (
        <div>
            <button onClick={increase}>Increase</button>
            Child
        </div>
    )
}

export default Child