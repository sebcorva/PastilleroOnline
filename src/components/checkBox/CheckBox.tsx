import { useState } from "react";

type Props = {
    checked: boolean;
    onChange: () => void;
}

function CheckBox({checked, onChange}: Props) {
  return (
    <input type="checkbox" className="toggle toggle-success" checked={checked} onChange={onChange}/>
  )
}

export default CheckBox