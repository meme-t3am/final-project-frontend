import { createContext, useEffect, useState } from 'react';
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
      {children}
    </MemeContext.Provider>
  );
}
