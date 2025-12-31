import Tabs from "./components/tabs/Tabs";
import Icon from "./components/icon/Icon";
import MedList from "./components/MedList/MedList";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  
  const [activeTab, setActiveTab] = useState("Desayuno");
  const [setting, setSetting] = useState(false)

  const handleSettings = () => {
    setSetting(!setting)
  }

  const [lists, setLists] = useState({
        Desayuno: [
            { name: 'Vitamina A', portion: '2 gotas', taken: false},
            { name: 'Glutamina', portion: '3 gr.', taken: false},
            { name: 'Enzima Digestiva', portion: '1 capsula', taken: false}
        ],
        Almuerzo: [
            { name: 'Omega 3', portion: '2 gotas', taken: false},
            { name: 'Enzima Digestiva', portion: '1 capsula', taken: false}
        ],
        Once: [
            { name: 'Omega 3', portion: '2 gotas', taken: false}
        ],
        Noche: [
            { name: 'Bisiglinato de Magnesio', portion: '1 capsula', taken: false},
            { name: 'Sertralina', portion: '1 capsula', taken: false},
        ]
    });
  
  const handleAdd = () => {
        const name = prompt("Nombre medicamento: ");
        const portion = prompt("Porcion a tomar: ");

        if (name && portion) {
            const newMed = {name, portion};

            setLists({...lists,[activeTab]:[...lists[activeTab], newMed]});
        };
    }

    const handleRemove = (name : string) => {
        const confirmed = confirm(`Estas seguro de eliminar: ${name}?`);
        if (confirmed) {
            setLists({...lists,[activeTab]:lists[activeTab].filter(item => item.name !== name)})
        }
    }

    const handleTaken = (name: string) => {
        setLists({...lists, [activeTab]: lists[activeTab].map(item => 
            item.name === name ? {...item, taken: !item.taken} : item )});
    }

  return (
    <div className={styles.card}>
      <header className={styles.title}>
        <h1 className={styles.titleText}>Recordatorio Pastillas</h1>
        <Icon onClick={handleSettings} typeButton="editIcon" />
      </header>
      <main className={styles.ListCard}>
        <Tabs activeTab={activeTab} onChange={setActiveTab}/>
        <div>
          {activeTab === "Desayuno" && <MedList setting={setting} data={lists[activeTab]} onToggle={handleTaken} onAdd={handleAdd} onRemove={handleRemove}/>}
          {activeTab === "Almuerzo" && <MedList setting={setting} data={lists[activeTab]} onToggle={handleTaken} onAdd={handleAdd} onRemove={handleRemove}/>}
          {activeTab === "Once" && <MedList setting={setting} data={lists[activeTab]} onToggle={handleTaken} onAdd={handleAdd} onRemove={handleRemove}/>}
          {activeTab === "Noche" && <MedList setting={setting} data={lists[activeTab]} onToggle={handleTaken} onAdd={handleAdd} onRemove={handleRemove}/>}
        </div>        
      </main>
    </div>
  )
}

export default App