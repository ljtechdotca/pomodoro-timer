import { Timer } from "@components";
import { SettingsContext } from "@lib/context";
import type { NextPage } from "next";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const active = useRef<string>("work");
  const counter = useRef<number>(1);
  const [paused, setPaused] = useState(true);
  const [current, setCurrent] = useState(0);
  const [target, setTarget] = useState<number | null>(null);
  const { settings, setSettings } = useContext(SettingsContext);

  const handler = (type: string) => {
    switch (type) {
      case "pause":
        if (paused) {
          setPaused(false);
          if (!target) {
            setTarget(settings[active.current] * 1000 * 60);
          }
        } else {
          setPaused(true);
        }
        break;
      case "reset":
        counter.current = 1;
        setCurrent(0);
        setPaused(true);
        setTarget(null);
        break;
      default:
        console.log("Bad Handler Type");
        break;
    }
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        if (target && current >= target) {
          console.log(`${active.current} timer`);
          if (active.current === "work") {
            if (counter.current === settings.rounds) {
              const newActive = "rest";
              setTarget(settings[newActive] * 1000 * 60);
              active.current = newActive;
              counter.current = 0;
            } else {
              const newActive = "break";
              setTarget(settings[newActive] * 1000 * 60);
              active.current = newActive;
            }
          } else {
            const newActive = "work";
            setTarget(settings[newActive] * 1000 * 60);
            active.current = newActive;
            counter.current = counter.current + 1;
          }
        }
        setCurrent((state) => (target && current >= target ? 0 : state + 1000));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [active, counter, settings, target, current, paused]);

  useEffect(() => {
    if (target) {
      console.log(new Date(current).toLocaleTimeString());
      console.log(new Date(target).toLocaleTimeString());
    }
  }, [target, current]);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          {target && active.current === "work" && (
            <Timer
              color="red"
              current={current}
              handler={(type) => handler(type)}
              paused={paused}
              progress={(current / target) * 100}
              rounds={counter.current}
              target={target}
            />
          )}
          {target && active.current === "break" && (
            <Timer
              color="green"
              current={current}
              handler={(type) => handler(type)}
              paused={paused}
              progress={(current / target) * 100}
              rounds={counter.current}
              target={target}
            />
          )}
          {target && active.current === "rest" && (
            <Timer
              color="blue"
              current={current}
              handler={(type) => handler(type)}
              paused={paused}
              progress={(current / target) * 100}
              rounds={counter.current}
              target={target}
            />
          )}
        </div>
        {!target && (
          <button className={styles.button} onClick={() => handler("pause")}>
            play
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
