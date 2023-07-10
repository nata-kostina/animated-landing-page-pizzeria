import styles from "./App.module.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import ShortMenu from "./components/menuShort/ShortMenu";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <Intro />
      <ShortMenu />
      <main style={{height: "350vh"}}>Hi</main>
    </div>
  );
}

export default App;
