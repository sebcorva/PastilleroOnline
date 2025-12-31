import styles from "./Tabs.module.css"

type Props = {
  activeTab: string;
  onChange: (tabName: string) => void;
}

function Tabs({activeTab, onChange}: Props) {

  const tabs = ["Desayuno", "Almuerzo", "Once", "Noche"];

  return (
    <div className="tabs tabs-box">
        {tabs.map(tabs=> (
          <input key={tabs} type="radio" name="my_tabs_1" className="tab" aria-label={tabs} checked={activeTab === tabs} onChange={() => onChange(tabs)}/>
        ))}
    </div>
  )
}

export default Tabs