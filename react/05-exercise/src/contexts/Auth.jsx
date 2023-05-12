import { createContext } from "react";

export const AuthContext = createContext({
    // token: '',
    // lang: 'en',
    // theme: 'light'
})

const AuthProvider = (props) => {
    
    return (
        <AuthContext.Provider value={{
            token: 'Skh5FAK9TxHokYigQVEfamApIyFg14K860stSjCF'
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider