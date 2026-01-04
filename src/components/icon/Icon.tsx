import { Settings, CirclePlus, CircleMinus, Trash2 } from 'lucide-react';
import styles from "./Icon.module.css";

type Props = {
    onClick? : () => void;
    type: keyof typeof iconMap;
}

const iconMap = {
  settings: Settings,
  plus: CirclePlus,
  minus: CircleMinus,
  trash: Trash2
};

function icon({onClick, type}: Props) {

  const SelectedIcon = iconMap[type];

  return (
    <SelectedIcon onClick={onClick} className={styles.icon}/>
  )
}

export default icon