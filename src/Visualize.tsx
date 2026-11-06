import { Index } from "solid-js";
import styles from "./Visualize.module.css";

export const Visualize = (props: { cell: (0 | 1)[]; offset: number }) => {
  return (
    <div class={styles.visualize}>
      <div class={styles.target}></div>
      <Index each={props.cell}>
        {(v, i) => {
          const offset = () => ((i - props.offset + 150) % 100) - 50;
          return (
            <div
              classList={{
                [styles.cell]: true,
                [styles.one]: v() === 1,
                [styles.warp]: Math.abs(offset()) >= 45,
              }}
              style={{ "--offset": offset() }}
            ></div>
          );
        }}
      </Index>
    </div>
  );
};

export default Visualize;
