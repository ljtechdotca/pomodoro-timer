import { Range } from "@components";
import { INIT_SETTINGS } from "@lib/constants";
import { SettingsContext } from "@lib/context";
import { useContext } from "react";
import styles from "./Menu.module.scss";

export interface MenuProps {}

export const Menu = ({}: MenuProps) => {
  const { settings, setSettings } = useContext(SettingsContext);

  return (
    <div className={styles.root} onClick={(event) => event.stopPropagation()}>
      <div className={styles.container}>
        <Range
          id="work"
          color="red"
          onRange={(value) =>
            setSettings((state) => ({
              ...state,
              work: value,
            }))
          }
          label="Work"
          max={75}
          min={15}
          time={true}
          value={settings.work}
        />
        <Range
          id="break"
          color="green"
          onRange={(value) =>
            setSettings((state) => ({
              ...state,
              break: value,
            }))
          }
          label="Break"
          max={25}
          min={5}
          time={true}
          value={settings.break}
        />
        <Range
          id="rest"
          color="blue"
          onRange={(value) =>
            setSettings((state) => ({
              ...state,
              rest: value,
            }))
          }
          label="Rest"
          max={50}
          min={10}
          time={true}
          value={settings.rest}
        />
        <Range
          id="rounds"
          color="grey"
          onRange={(value) =>
            setSettings((state) => ({
              ...state,
              rounds: value,
            }))
          }
          label="Rounds"
          max={10}
          min={2}
          time={false}
          value={settings.rounds}
        />
        <button
          className={styles.button}
          onClick={() => setSettings(INIT_SETTINGS)}
        >
          Defaults
        </button>
      </div>
    </div>
  );
};
