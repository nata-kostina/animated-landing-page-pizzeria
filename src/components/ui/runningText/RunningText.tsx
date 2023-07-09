import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";
import cn from "classnames";

interface Props {
  direction: "left" | "right";
  children: string;
  offset: number;
}
const mainItemPosition = 3;
const items = new Array(4).fill(null);
const RunningText = ({ offset, direction, children }: Props) => {
  return (
    <div className={styles.marquee}>
      <Marquee direction={direction} style={{ overflowY: "hidden" }}>
        {items.map((item, index) => {
          if (index === (mainItemPosition + offset) % items.length) {
            return (
              <span
                className={cn(
                  styles.marquee__item,
                  styles["marquee__item--highlighted"]
                )}
                key={index}
              >
                <span className={styles["text-circle"]}></span>
                Don Peppe
                <span className={styles["text-circle"]}></span>
              </span>
            );
          } else
            return (
              <span className={styles.marquee__item} key={index}>
                {children}
              </span>
            );
        })}
      </Marquee>
    </div>
  );
};

export default RunningText;
