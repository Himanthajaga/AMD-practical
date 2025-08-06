import { Children, createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext<any>(undefined);
export const AuthProvider = ({ Children }: { Children: ReactNode }) => {
    const [isUser, setIsUser] = useState(false);
    const login = () => setIsUser(true);
    const logout = () => {
        setIsUser(false);
    }
    return <AuthContext.Provider value={{ isUser, login, logout }}>{Children}</AuthContext.Provider>;
}
export const useAuth = () => { 
    return useContext(AuthContext);
}