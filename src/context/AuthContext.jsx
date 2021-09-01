import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaesConfig";

const AuthContext = React.createContext();

//Hook

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unSub;
  }, []);

  return (
    <AuthContext.Provider value={{ user: user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
