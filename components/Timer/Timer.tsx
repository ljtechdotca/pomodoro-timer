import { useEffect } from "react";
import styles from "./Timer.module.scss";

export interface TimerProps {
  color: string;
  current: number;
  handler: (type: string) => any;
  paused: boolean;
  progress: number;
  rounds: number;
  target: number;
}

export const Timer = ({
  color,
  current,
  handler,
  paused,
  progress,
  rounds,
  target,
}: TimerProps) => {
  const radius = 160;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const strokeDasharray = `${circumference} ${circumference}`;

  useEffect(() => {
    console.log(strokeDashoffset, strokeDasharray);
  });

  const minutes = Math.floor((target - current) / 1000 / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(((target - current) / 1000) % 60)
    .toString()
    .padStart(2, "0");

  const tomatoes = new Array(rounds).fill("🍅");

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.round}>
          {color === "blue" ? "REST" : color === "green" ? "BREAK" : "WORK"}
        </div>
        <div className={styles.rounds}>
          {tomatoes.length > 0 ? tomatoes.map((item) => item) : "🌱"}
        </div>
        <div className={styles.time}>
          <span>{minutes}:</span>
          <span>{seconds !== "60" ? seconds : "00"}</span>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => handler("pause")}>
            {paused ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            )}
          </button>
          <button onClick={() => handler("reset")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
      <svg className={styles.svg} height={radius * 2} width={radius * 2}>
        <circle
          style={{
            strokeDashoffset,
            
          }}
          className={styles.circle}
          strokeDasharray={strokeDasharray}
          strokeWidth={stroke}
          stroke={`var(--${color})`}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <svg className={styles.svg__base} height={radius * 2} width={radius * 2}>
        <circle
          className={styles.circle}
          stroke="var(--accent-1)"
          strokeWidth={stroke / 2}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    </div>
  );
};
