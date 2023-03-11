import { Link } from "react-scroll";

import styles from "../styles/Sidebar.module.css";

const SidebarMenu = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.p}>Your new gang</p>
      <ul className={styles.ul}>
        <li className={styles.menuItem}>
          <Link
            to="polar bear"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Polar Bear
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="cheetah"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Cheetah
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="panda" spy={true} smooth={true} offset={-50} duration={500}>
            Panda
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="fox" spy={true} smooth={true} offset={-50} duration={500}>
            Fox
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="squirrel"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Squirrel
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="butterfly"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Butterfly
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="elephant"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Elephant
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
