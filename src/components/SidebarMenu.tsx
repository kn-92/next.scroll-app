import styles from "../styles/Sidebar.module.css";

const SidebarMenu = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.p}>Your new gang</p>
      <ul className={styles.ul}>
        <li className={styles.menuItem_active}>Polar Bear</li>
        <li className={styles.menuItem}>Cheetah</li>
        <li className={styles.menuItem}>Panda</li>
        <li className={styles.menuItem}>Fox</li>
        <li className={styles.menuItem}>Squirrel</li>
        <li className={styles.menuItem}>Butterfly</li>
        <li className={styles.menuItem}>Elephant</li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
