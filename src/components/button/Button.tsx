import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
    children: ReactNode;
    typeButton: string;
    onClick: () => void;
}

function Button({typeButton ,children, onClick}: Props) {

  return (
    <button onClick= {onClick} className={`btn btn-${typeButton} ${styles.button}`}>{children}</button>
  )
}

export default Button