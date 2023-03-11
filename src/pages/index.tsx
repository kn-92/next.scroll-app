import styles from "../styles/index.module.css";

import SidebarMenu from "@/components/SidebarMenu";
import Section from "@/components/Section";

import { sectionData } from "@/data/sectionData";

//READ THIS: If there is any problem with size of elements please change a window of broweser to
// 1366x768 px, it is the resolution of device I was working with but I hope the app is rendering
//correctly on higher resolutions, I used % and vh, vw units.

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
