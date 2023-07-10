import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
    text: string
}

const IntroItem = ({text}:Props) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <div ref={itemRef} className={styles.intro__item}>
      <motion.div style={{ y }} className={styles.intro__text}>
        {text}
      </motion.div>
    </div>
  );
};

export default IntroItem;
