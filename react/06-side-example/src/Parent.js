import Child from "./Child"

const Parent = ({setCounter}) => {
    
    return (
        <div>
            <Child setCounter={setCounter} />
        </div>
    )
}

export default Parent