import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    typeButton: string;
    onClick: () => void;
}

function Button({typeButton ,children, onClick}: Props) {

  return (
    <button onClick= {onClick} className={`btn btn-${typeButton}`}>{children}</button>
  )
}

export default Button