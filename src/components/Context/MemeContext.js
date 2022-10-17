import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getMemes } from '../Services/meme';

export const MemeContext = createContext();

export default function MemeProvider({ children }) {
  const [meme, setMeme] = useState('');
  const [url, setUrl] = useState(null);

  useEffect(() => {
    getMemes();
  }, []);

  const stateAndSetters = {
    meme,
    url,
    setMeme,
    setUrl,
  };

  return (
    <MemeContext.Provider value={stateAndSetters}>
      {children} || <Outlet />
    </MemeContext.Provider>
  );
}
