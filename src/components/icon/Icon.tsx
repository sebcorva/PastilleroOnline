import { Settings } from 'lucide-react';
import styles from "./Icon.module.css";

type Props = {
    typeButton: string;
    onClick : () => void;
}

function icon({typeButton, onClick}: Props) {

    const classIcon = styles[typeButton];

  return (
    <Settings onClick={onClick}/>
    
  )
}

export default icon