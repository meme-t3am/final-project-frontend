import { createContext, useEffect, useState } from 'react';
import { getMemes } from '../Services/meme';

const MemeContext = createContext();

export default function MemeProvider() {
  const [meme, setMeme] = useState('');

  useEffect(() => {
    getMemes();
  }, []);

  const stateAndSetters = {
    meme,
    setMeme,
  };

  return <MemeContext.Provider value={stateAndSetters}></MemeContext.Provider>;
}
