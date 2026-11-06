import { For } from "solid-js";
import code from "./code.json" with { type: "json" };
import styles from "./StateList.module.css";

const NextState = (prop: { num: number }) => {
  const isStop = () => prop.num === code.length;
  return (
    <div classList={{ [styles.next]: true, [styles.stop]: isStop() }}>
      {isStop() ? "STOP" : prop.num}
    </div>
  );
};

export const StateList = () => {
  return (
    <div class={styles.list}>
      <For each={code}>
        {([[a, b, c], [d, e, f]], i) => (
          <div class={styles.state}>
            <div class={styles.num}>{i()}</div>
            <div class={styles.zero}>
              {a} {b} <NextState num={c as number} />
            </div>
            <div class={styles.one}>
              {d} {e} <NextState num={f as number} />
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default StateList;
