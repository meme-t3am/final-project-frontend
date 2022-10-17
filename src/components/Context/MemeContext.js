import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getMemes } from '../Services/meme';

export const MemeContext = createContext();

export default function MemeProvider({ children }) {
  const [meme, setMeme] = useState('');

  useEffect(() => {
    getMemes();
  }, []);

  const stateAndSetters = {
    meme,
    setMeme,
  };

  return (
    <MemeContext.Provider value={stateAndSetters}>
      {children} || <Outlet />
    </MemeContext.Provider>
  );
}
