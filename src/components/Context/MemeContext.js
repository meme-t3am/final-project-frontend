import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const MemeContext = createContext();

export default function MemeProvider({ children }) {
  const [meme, setMeme] = useState([]);

  const stateAndSetters = {
    meme,
    setMeme,
  };

  return (
    <MemeContext.Provider value={stateAndSetters}>
      {children} <Outlet />
    </MemeContext.Provider>
  );
}
