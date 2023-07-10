import styles from "./App.module.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <Intro />
      <main style={{height: "350vh"}}>Hi</main>
    </div>
  );
}

export default App;
