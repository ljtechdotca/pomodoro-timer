import styles from "./Range.module.scss";

export interface RangeProps {
  id: string;
  onRange: (value: number) => any;
  color: string;
  label: string;
  max: number;
  min: number;
  time: boolean;
  value: number;
}

export const Range = ({
  id,
  onRange,
  color,
  label,
  max,
  min,
  time,
  value,
}: RangeProps) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.container}>
        <div className={styles.value}>
          {value}
          {time && ":00"}
        </div>
        <input
          className={styles[`input__${color}`]}
          type="range"
          id={id}
          name={id}
          min={min}
          max={max}
          value={value}
          onChange={(event) => onRange(parseInt(event.target.value))}
        />
      </div>
    </div>
  );
};
