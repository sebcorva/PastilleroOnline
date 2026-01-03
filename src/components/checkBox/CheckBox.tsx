import { useState } from "react";

type Props = {
    checked: boolean;
    onChange: () => void;
    disabled: boolean;
}

function CheckBox({checked, onChange, disabled}: Props) {
  return (
    <input type="checkbox" className="toggle toggle-success" checked={checked} onChange={onChange} disabled={disabled}/>
  )
}

export default CheckBox