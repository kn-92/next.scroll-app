import styles from "../styles/index.module.css";

import SidebarMenu from "@/components/SidebarMenu";
import Section from "@/components/Section";

import { sectionData } from "@/data/sectionData";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <SidebarMenu />
      {sectionData.map((element) => (
        <Section
          key={element.animalType}
          id={element.animalType}
          animalType={element.animalType}
          slogan={element.slogan}
          highlited={element.highlited}
          src={element.src}
        />
      ))}
    </div>
  );
}
