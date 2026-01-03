import styles from "./Tabs.module.css"
import Icon from "../icon/Icon"

type Props = {
  activeTab: string;
  onChange: (tabName: string) => void;
  data: string[];
  setting: boolean;
  onRemove: (tabName: string) => void;
}

function Tabs({activeTab, onChange, data, setting, onRemove}: Props) {
  
  return (
    <div className={`tabs tabs-box ${styles.tab}`}>
        {data.map(tabs=> (
          <><input key={tabs} type="radio" name="my_tabs_1" className="tab" aria-label={tabs} checked={activeTab === tabs} onChange={() => onChange(tabs)} />
          <>
            {setting && 
              <Icon onClick={() => onRemove(tabs)} type="minus" />
            }
          </>
          </>
        ))}
    </div>
  )
}

export default Tabs