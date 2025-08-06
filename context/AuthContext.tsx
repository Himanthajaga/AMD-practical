import { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext<any>(undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isUser, setIsUser] = useState(false);
  const login = () => setIsUser(true);
  const logout = () => {
    setIsUser(false);
  };
  return (
    <AuthContext.Provider value={{ isUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
