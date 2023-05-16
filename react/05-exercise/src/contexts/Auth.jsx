import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
    // token: '',
    // lang: 'en',
    // theme: 'light'
})

const AuthProvider = (props) => {
    const navigate = useNavigate()
    const signIn = (token, user) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user))
    }
    const signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login')
    }
    return (
        <AuthContext.Provider value={{
            token: localStorage.getItem('token'),
            signIn,
            user: JSON.parse(localStorage.getItem('user')),
            signOut
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider