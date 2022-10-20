import { useContext } from 'react';
import { MemeContext } from '../../Context/MemeContext';

export default function TopMemeCard() {

  const { singleMeme } = useContext(MemeContext);

  return (
    <div>
      <img src={singleMeme[1]} />
    </div>
  );
}
