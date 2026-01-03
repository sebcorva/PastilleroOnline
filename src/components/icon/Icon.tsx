import { Settings, CirclePlus } from 'lucide-react';
import styles from "./Icon.module.css";

type Props = {
    onClick? : () => void;
    type: keyof typeof iconMap;
}

const iconMap = {
  settings: Settings,
  plus: CirclePlus,
};

function icon({onClick, type}: Props) {

  const SelectedIcon = iconMap[type];

  return (
    <SelectedIcon onClick={onClick} className={styles.icon}/>
  )
}

export default icon