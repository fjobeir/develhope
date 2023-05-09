import { createContext } from "react";

export const AuthContext = createContext({
    // token: '',
    // lang: 'en',
    // theme: 'light'
})

const AuthProvider = (props) => {
    
    return (
        <AuthContext.Provider value={{
            token: 'n2nlsiJS98KKQv6vtLoGpCRljwK2BXbV24QS6SSA'
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider