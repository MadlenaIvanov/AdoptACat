import { createContext, useContext } from "react";
import useLocalStorage from '../hooks/uselocalStorage';

export const AuthContext = createContext()

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
  }

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    
  const login = (authData) => {
    setUser(authData)
  };

  const logout = () => {
    setUser(initialAuthState);
  };

    return (
        <AuthContext.Provider value={{user, login, logout, isAuthenticated: user.email}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}
