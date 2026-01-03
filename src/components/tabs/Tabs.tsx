import styles from "./Tabs.module.css"
import Icon from "../icon/Icon"

type Props = {
  activeTab: string;
  onChange: (tabName: string) => void;
  data: string[];
  onClick: () => void;
}

function Tabs({activeTab, onChange, data, onClick}: Props) {
  
  return (
    <div className={`tabs tabs-box ${styles.tab}`}>
        {data.map(tabs=> (
          <input key={tabs} type="radio" name="my_tabs_1" className="tab" aria-label={tabs} checked={activeTab === tabs} onChange={() => onChange(tabs)}/>
        ))}
        <Icon onClick={onClick} type="plus" />
    </div>
  )
}

export default Tabs