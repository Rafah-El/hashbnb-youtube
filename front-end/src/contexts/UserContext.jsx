import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ ready, setReady ] = useState(false);

  useEffect(() => {
    const axiosGet = async () => {
      try {
        const { data } = await axios.get("/users/profile");
        setUser(data);
        setReady(true);
        
      } catch (error) {
        setUser(null);
      }
    };

    axiosGet();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;