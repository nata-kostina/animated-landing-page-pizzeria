import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import "./styles.css";
const Header = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  
  function update() {
    // if (scrollY?.current < scrollY?.prev) {
    //   setHidden(false);
    // } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
    //   setHidden(true);
    // }
  }

  useEffect(() => {
    return scrollY.onChange(() => {
      update();
    });
  });
  const item = {
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
    <div className="header">
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
                  <a href="#" className="nav__link">
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </div>
    </div>
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
