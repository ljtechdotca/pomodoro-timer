import { Header, Meta } from "@components";
import { INIT_SETTINGS } from "@lib/constants";
import { SettingsContext } from "@lib/context";
import { useState } from "react";
import styles from "./Layout.module.scss";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [settings, setSettings] =
    useState<Record<string, number>>(INIT_SETTINGS);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      <div className={styles.root}>
        <Meta />
        <Header />
        <main className={styles.container}>{children}</main>
      </div>
    </SettingsContext.Provider>
  );
};
