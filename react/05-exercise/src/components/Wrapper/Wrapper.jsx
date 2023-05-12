import Menu from "../Menu/Menu"

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <Menu />
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper
