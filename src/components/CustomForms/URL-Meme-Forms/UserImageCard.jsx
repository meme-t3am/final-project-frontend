import { useContext } from 'react';
import { MemeContext } from '../../Context/MemeContext';

export default function UserImageCard() {
  const { displayUrl } = useContext(MemeContext);

  return (
    <div>
      {
        displayUrl
        &&
        <h3>Your image</h3>
      }
      <img src={displayUrl}/>
    </div>
  );
}
