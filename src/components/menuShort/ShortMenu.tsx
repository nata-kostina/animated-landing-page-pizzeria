import styles from "./styles.module.scss";
import Img1 from "../../assets/img/menu/pizza/campagnola.png";
import Img2 from "../../assets/img/menu/pizza/fiori_di_zucca.png";
import Img3 from "../../assets/img/menu/pizza/francescana.png";
import Img4 from "../../assets/img/menu/pizza/mediterranea.png";
import Img5 from "../../assets/img/menu/pizza/parmagiana.png";
import Img6 from "../../assets/img/menu/pizza/boscaiola.png";
import ShortMenuItem from "./ShortMenuItem";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
const ShortMenu = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 75]);
  return (
    <section className={styles.menu}>
      <div className={styles.menu__content}>
        <ShortMenuItem
          img={Img1}
          cssProps={{
            gridArea: "pizza-1",
            transform: "translate(10rem, -2rem)",
          }}
        />
        <ShortMenuItem
          img={Img2}
          cssProps={{
            gridArea: "pizza-2",
            transform: "translate(3rem, -7rem)",
          }}
        />
        <ShortMenuItem
          img={Img3}
          cssProps={{
            gridArea: "pizza-3",
            transform: "translate(-12rem, 3rem)",
          }}
        />
        <h2 className={styles.menu__title}>CHOOSE YOUR FLAVOR</h2>
        <ShortMenuItem
          img={Img4}
          cssProps={{
            gridArea: "pizza-4",
            transform: "translate(-8rem, 1rem)",
          }}
        />
        <ShortMenuItem
          img={Img5}
          cssProps={{
            gridArea: "pizza-5",
            transform: "translate(22rem, -3rem)",
          }}
        />
        <ShortMenuItem
          img={Img6}
          cssProps={{
            gridArea: "pizza-6",
            transform: "translate(16rem, 4rem)",
          }}
        />
      </div>
    </section>
  );
};

const menuItems = [
  {
    id: 0,
    img: Img1,
  },
  {
    id: 1,
    img: Img2,
  },
  {
    id: 2,
    img: Img3,
  },
  {
    id: 3,
    img: Img4,
  },
  {
    id: 4,
    img: Img5,
  },
  {
    id: 5,
    img: Img6,
  },
];

export default ShortMenu;
