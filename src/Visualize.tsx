import { For } from "solid-js";
import styles from "./Visualize.module.css";

export const Visualize = (props: { cell: (0 | 1)[] }) => {
  return <div class={styles.visualize}>
    <For each={props.cell}>{(v, i) => (<div classList={{ [styles.cell]: true, [styles.one]: v === 1 }} style={{ "--offset": i() }}></div>)}</For>
  </div>;
};

export default Visualize;
