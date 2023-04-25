function MyComponent(props) {
    console.log(props)
    return (
        <p>MY name is {props.name} I live in {props.country}</p>
    )
}

export default MyComponent;