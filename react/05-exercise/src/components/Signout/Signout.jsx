import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/Auth"

const Signout = () => {
    const { signOut } = useContext(AuthContext)
    useEffect(() => {
        signOut()
    }, [])

    return (
        <></>
    )
}

export default Signout