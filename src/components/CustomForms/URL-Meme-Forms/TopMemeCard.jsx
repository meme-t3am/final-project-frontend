import { useContext } from 'react';
import { MemeContext } from '../../Context/MemeContext';

export default function TopMemeCard() {

  const { singleMeme, setClick } = useContext(MemeContext);

  const handleClick = () => {
    setClick('click');
  };

  return (
    <div >
      {
        singleMeme[1]
        &&
        <h3>Llegor likes this meme</h3>
      }
      <img src={singleMeme[1]} />
      {
        singleMeme[1]
        &&
        <button onClick={handleClick}>See Runner-ups</button>
      }
    </div>
  );
}
