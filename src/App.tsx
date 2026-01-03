import Tabs from "./components/tabs/Tabs";
import Icon from "./components/icon/Icon";
import MedList from "./components/MedList/MedList";
import Button from "./components/button/Button";
import styles from "./App.module.css";
import React, { useState, useEffect } from "react";

function App() {
  
  const [activeTab, setActiveTab] = useState("Desayuno");
  const [setting, setSetting] = useState(false);
  const [todayDate, setTodayDate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDate = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/timezone/America/Argentina/Salta");
        const data = await response.json();

        const date = new Date(data.datetime);

        const dayString = date.toLocaleDateString('es-ES', { weekday: 'long'});
        const dayNumber = date.getDate();
        const monthString = date.toLocaleDateString('es-ES', { month: 'long'});

        const formatDate = `${dayString.charAt(0).toUpperCase() + dayString.slice(1)} ${dayNumber} de ${monthString.charAt(0).toUpperCase() + monthString.slice(1)}`;

        setTodayDate(formatDate);
        setLoading(false);
      } catch (error) {
        console.error("Error: ", error);
        setLoading(false);
      }
    };
    getDate();
  }, []);

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

  const tabs = Object.keys(lists);

  const handleTab = () => {
    const input = prompt("Nombre nueva pestaña: ")
    if (!input) return;

    const tabName = input.trim();
    if (lists[tabName]) {
        alert("Esa pestaña ya existe");
        return;
      }

    setLists({...lists, [tabName]: []});

    setActiveTab(tabName);
    };

    const handleTabRemove = ( tabName) => {
      const confirmed = confirm(`Estas seguro de eliminar: ${tabName}?`);
      if (confirmed) {
        const newLists = {...lists};
        delete newLists[tabName];
        setLists(newLists);

        if (activeTab === tabName) {
          const remainingTabs = Object.keys(newLists);
          if (remainingTabs.length > 0) {
            setActiveTab(remainingTabs[0]);
          } else {
            alert("Haz eliminado todas las pestañas");
            setActiveTab(" ")
          }
        }
      }
    }

  const handleAdd = () => {
      const name = prompt("Nombre medicamento: ");
      const portion = prompt("Porcion a tomar: ");

      if (name && portion) {
          const newMed = {name, portion, taken: false};

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
        <div className={styles.setting}>
          <p className={styles.date}>{loading ? "Obteniendo Fecha de hoy..." : todayDate}</p>
          <Icon type="settings" onClick={handleSettings} />
        </div>
      </header>
      <main className={styles.ListCard}>
        <Tabs setting={setting} data={tabs} onRemove={handleTabRemove} activeTab={activeTab} onChange={setActiveTab}/>
        {tabs.length > 0 ? (
          <div>
          <MedList setting={setting} data={lists[activeTab] || []} onToggle={handleTaken} onAdd={handleAdd} onRemove={handleRemove} onHandle={handleTab}/>
        </div> 
        ) : (
          <div className="no-tabs-message">
            <p>No tienes ninguna categoría creada.</p>
            <Button onClick={handleTab} typeButton="info">Agregar Pestaña</Button>
          </div>
        )
      }
               
      </main>
    </div>
  )
}

export default App