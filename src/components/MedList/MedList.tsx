import CheckBox from "../checkBox/CheckBox";
import Button from "../button/Button";
import styles from "./MedList.module.css"

type Props = {
    onClick? : () => void;
    setting: boolean;
    onToggle: (name: string) => void;
    data: { name: string; portion: string; taken: boolean }[];
    onAdd: () => void;
    onHandle: () => void;
    onRemove: (name: string) => void;
}

function MedList({onRemove, onAdd, setting, data, onToggle, onHandle}: Props) {

  return (
    <div>
        {(data.length > 0) ? (
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
            </div> ) : (
         <p>No hay remedios ingresados</p>
        )}
        
        <div>
            {
            setting && 
            <div className={styles.buttons}>
                <Button onClick={onHandle} typeButton="info">Agregar Pestaña</Button>
                <Button onClick={onAdd} typeButton="success">Agregar Medicamento</Button>
            </div>
            }
        </div>
    </div>
            
  )
}

export default MedList