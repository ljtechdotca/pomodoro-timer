import { Menu } from "@components";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => setActive(false));

    return () => {
      document.body.removeEventListener("click", () => setActive(false));
    };
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setActive(!active);
  };

  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <button className={styles.button} onClick={handleMenu}>
          {active ? "C" : "M"}
        </button>
        {active && <Menu />}
      </div>
    </header>
  );
};
