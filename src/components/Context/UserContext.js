// verify user and set user state

import { createContext, useContext, useEffect, useState } from 'react';
import { verifyUser } from '../Services/auth';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const verify = async () => {
    const res = await verifyUser();
    res.status != 401 ? setUser(res.user) : null;
  };

  useEffect(() => {
    verify();
  }, []);

  const stateAndSetters = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={stateAndSetters}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const { user, setUser } = useContext(UserContext);
  return [user, setUser];
}
