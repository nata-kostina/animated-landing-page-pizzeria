import RunningText from "../ui/runningText/RunningText";
import styles from "./styles.module.scss";
import ImgHero from "../../assets/img/hero/hero.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles["hero__text-box"]}>
          <RunningText direction="left" offset={0}>
            Pizza time
          </RunningText>
          <RunningText direction="right" offset={0}>
            Order online
          </RunningText>
          <RunningText direction="left" offset={2}>
            Pizza time
          </RunningText>
        </div>
        <div className={styles["hero__img-box"]}>
          <img className={styles.hero__img} src={ImgHero} alt={"Pizza slice"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
