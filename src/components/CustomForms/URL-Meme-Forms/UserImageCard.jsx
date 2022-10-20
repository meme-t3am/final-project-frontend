import { useContext } from 'react';
import { MemeContext } from '../../Context/MemeContext';

export default function UserImageCard() {
  const { displayUrl } = useContext(MemeContext);

  return (
    <div>
      <img src={displayUrl}/>
    </div>
  );
}
