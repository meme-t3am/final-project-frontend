import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const MemeContext = createContext();

export default function MemeProvider({ children }) {
  const [meme, setMeme] = useState([]);
  const [singleMeme, setSingleMeme] = useState([]);
  const [displayUrl, setDisplayUrl] = useState('');

  const stateAndSetters = {
    meme,
    setMeme,
    singleMeme,
    setSingleMeme,
    displayUrl,
    setDisplayUrl,
  };

  return (
    <MemeContext.Provider value={stateAndSetters}>
      {children} <Outlet />
    </MemeContext.Provider>
  );
}
