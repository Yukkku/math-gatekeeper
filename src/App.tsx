import { onMount, createSignal } from "solid-js";
import Visualize from "./Visualize";
import StateList from "./StateList";
import { init, next, type Status } from "./simurate";
import styles from "./App.module.css";

const getSurCells = (status: Status): (0 | 1)[] => {
  const r: (0 | 1)[] = [];
  for (let i = 0; i < 100; ++i) r.push(0);
  for (let i = -50n; i < 50n; ++i) {
    r[Number((((i + status.offset) % 100n) + 100n) % 100n)] = status.tape.has(
      status.offset + i,
    )
      ? 1
      : 0;
  }
  return r;
};

export const App = () => {
  const status = init();
  const [surCells, setSurCells] = createSignal<(0 | 1)[]>(
    Array.from({ length: 101 }, () => 0),
  );
  const [offset, setOffset] = createSignal<number>(0);
  onMount(() => {
    setInterval(() => {
      next(status);
      setSurCells(getSurCells(status));
      setOffset(Number(((status.offset % 100n) + 100n) % 100n));
    }, 500);
  });
  return (
    <>
      <div class={styles.title}>止まったら現代数学がサ終するプログラム</div>
      <Visualize cell={surCells()} offset={offset()} />
      <StateList />
    </>
  );
};

export default App;
