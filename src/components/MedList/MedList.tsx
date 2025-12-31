import CheckBox from "../checkBox/CheckBox";
import Button from "../button/Button";
import styles from "./MedList.module.css"

type Props = {
    onClick? : () => void;
    setting: boolean;
    onToggle: (name: string) => void;
    data: { name: string; portion: string; taken: boolean }[];
    onAdd: () => void;
    onRemove: (name: string) => void;
}

function MedList({onRemove, onAdd, setting, data, onToggle}: Props) {

  return (
    <div>
        <div>
            {data.map((item) => (
                <div className={styles.card}>
            <ul className="list bg-base-100 rounded-box">
                <li className={[`list-row`, styles.item].join(' ')} key={item.name}> 
                    <div>{item.name}</div>
                    <div>{item.portion}</div>
                    {/* <div>{item.taken ? "activo" : "desactivo"}</div> */}
                    <CheckBox checked = {item.taken} onChange={() => onToggle(item.name)}/>
                    {setting && 
                        <Button onClick={() => onRemove(item.name)} typeButton="error">eliminar</Button>
                    }
                </li>
                
            </ul>
        </div>
            ))}
        </div>
        <div>
            {
            setting && 
            <div className={styles.buttons}>
                <Button onClick={onAdd} typeButton="success">agregar</Button>
            </div>
            }
        </div>
    </div>
            
  )
}

export default MedList