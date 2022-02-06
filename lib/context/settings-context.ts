import { INIT_SETTINGS } from "@lib/constants";
import { createContext, Dispatch, SetStateAction } from "react";

export const SettingsContext = createContext<{
  settings: Record<string, number>;
  setSettings: Dispatch<SetStateAction<Record<string, number>>>;
}>({ settings: INIT_SETTINGS, setSettings: () => {} });
