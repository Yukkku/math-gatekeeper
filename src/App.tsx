import styles from "./App.module.css";
import StateList from "./StateList";

export const App = () => {
  return (
    <>
      <div class={styles.title}>止まったら現代数学がサ終するプログラム</div>
      <StateList />
    </>
  );
};

export default App;
