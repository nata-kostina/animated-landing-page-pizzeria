import { motion, useMotionValueEvent, useScroll, Variants } from "framer-motion";
import { useState } from "react";
import "./styles.css";
import cn from "classnames";

const Header = () => {
  const { scrollY } = useScroll();
  const isHeaderHidden = scrollY.getPrevious() > 300;

  const [hidden, setHidden] = useState(isHeaderHidden);
  const [headerBorder, setHeaderBorder] = useState("transparent");
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < scrollY.getPrevious()) {
      setHidden(false);
      if (latest > 300) {
        setHeaderBorder("var(--grey-xs)");
      } else {
        setHeaderBorder("transparent");
      }
    } else if (latest > 300) {
      setHidden(true);
    }
  });

  const headerVariants: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  const item: Variants = {
    hidden: (i: number) => {
      return i == 2 ? { y: 0, opacity: 1 } : { y: -150, opacity: 0 };
    },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        bounce: 0.1,
        delay: i == 0 || i == 4 ? 0.2 : 0,
        duration: 0.5,
      },
    }),
  };
  return (
    <motion.header
      className="header"
      initial={hidden ? "hidden" : "visible"}
      animate={hidden ? "hidden" : "visible"}
      variants={headerVariants}
      transition={{
        bounce: 0,
      }}
      style={{ borderColor: headerBorder }}
    >
      <div className="container">
        <div className="header__inner">
          <nav className="nav">
            <motion.ul initial="hidden" animate="show" className="nav__list">
              {links.map((link, i) => (
                <motion.li
                  custom={i}
                  variants={item}
                  transition={{ delay: 0.1 }}
                  className="nav__item"
                  key={link.id}
                >
                  <a
                    href="#"
                    className={cn("nav__link", {
                      ["nav__link--main"]: link.title === "Don Peppe",
                    })}
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

const links = [
  { id: 0, title: "Our menu" },
  { id: 1, title: "Restaurants" },
  { id: 2, title: "Don Peppe" },
  { id: 3, title: "Community" },
  { id: 4, title: "Jobs" },
];

export default Header;
