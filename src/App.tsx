import { onMount, createSignal } from "solid-js";
import Visualize from "./Visualize";
import StateList from "./StateList";
import { init, next, type Status } from "./simurate";
import styles from "./App.module.css";

const getSurCells = (status: Status): (0 | 1)[] => {
  const r: (0 | 1)[] = [];
  for (let i = -50n; i <= 50n; ++i) {
    r.push(status.tape.has(status.offset + i) ? 1 : 0);
  }
  return r;
};

export const App = () => {
  const status = init();
  const [surCells, setSurCells] = createSignal<(0 | 1)[]>(Array.from({ length: 101 }, () => 0));
  onMount(() => {
    setInterval(() => {
      next(status);
      setSurCells(getSurCells(status));
    }, 100);
  });
  return (
    <>
      <div class={styles.title}>止まったら現代数学がサ終するプログラム</div>
      <Visualize cell={surCells()} />
      <StateList />
    </>
  );
};

export default App;
