import IntroItem from "./IntroItem";
import styles from "./styles.module.scss";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.intro__content}>
          {introItems.map((item) => (
            <IntroItem key={item.id} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

const introItems = [
  { id: 0, text: "The real italian taste" },
  { id: 1, text: "Free delivery" },
];

export default Intro;
