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
            {data.map((item, index) => (
                <div className={styles.card}>
            <ul className="list bg-base-100 rounded-box">
                <li className={[`list-row`, styles.item].join(' ')} key={index}> 
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.portion}>{item.portion}</div>
                    {/* <div>{item.taken ? "activo" : "desactivo"}</div> */}
                    <CheckBox checked = {item.taken} onChange={() => onToggle(item.name)} disabled = { item.taken }/>
                    {setting && 
                        <Button onClick={() => onRemove(item.name)} typeButton="error">Eliminar</Button>
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
                <Button onClick={onAdd} typeButton="success">Agregar</Button>
            </div>
            }
        </div>
    </div>
            
  )
}

export default MedList