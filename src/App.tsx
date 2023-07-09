import styles from "./App.module.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <main style={{height: "350vh"}}>Hi</main>
    </div>
  );
}

export default App;
