import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  img: string;
  cssProps: React.CSSProperties;
}

const ShortMenuItem = ({ img, cssProps }: Props) => {
  const [rotate, setRotate] = useState(0)
  return (
    <div className={styles.menu__item} style={{ ...cssProps }}>
      <motion.div
        whileHover={{scale: 1.1}}
        onHoverStart={() => {
            setRotate((prev) => prev + 75)
        }}
        animate={{rotate}}
        style={{rotate}}
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: 0.9,
        }}
        className={styles["menu__img-box"]}
      >
        <img src={img} className={styles.menu__img} alt="Pizza" />
      </motion.div>
    </div>
  );
};

export default ShortMenuItem;
