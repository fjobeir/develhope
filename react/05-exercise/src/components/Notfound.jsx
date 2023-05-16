import { Link } from "react-router-dom"

const Notfound = () => {
    return (
        <>
            <h1>Not found</h1>
            <p>Invalid URL</p>
            you may want to <Link to={'/login'}>Login</Link>
        </>
    )
}

export default Notfound