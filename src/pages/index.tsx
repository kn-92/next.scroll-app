import styles from "../styles/index.module.css";

import SidebarMenu from "@/components/SidebarMenu";
import Section from "@/components/Section";

const sectionData = [
  {
    animalType: "polar bear",
    slogan: "Say hello to your new ",
    highlited: "friend",
    src: require("../assets/images/bear.PNG"),
  },
  {
    animalType: "cheetah",
    slogan: "No petting before  ",
    highlited: "eating",
    src: require("../assets/images/cheetah.PNG"),
  },
  {
    animalType: "panda",
    slogan: "Eating always with  ",
    highlited: "pleasure",
    src: require("../assets/images/panda.PNG"),
  },
  {
    animalType: "fox",
    slogan: "Sometimes quite  ",
    highlited: "suspicious",
    src: require("../assets/images/fox.PNG"),
  },
  {
    animalType: "squirrel",
    slogan: "Staying  ",
    highlited: "curious",
    src: require("../assets/images/squirrel.PNG"),
  },
  {
    animalType: "butterfly",
    slogan: "every time of a day",
    highlited: "Majestatic",
    src: require("../assets/images/butterfly.PNG"),
  },
  {
    animalType: "elephant",
    slogan: "It makes a differnce ",
    highlited: "huge",
    src: require("../assets/images/elephant.PNG"),
  },
];

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <SidebarMenu />
      {sectionData.map((animal) => (
        <Section
          key={animal.animalType}
          id={animal.animalType}
          animalType={animal.animalType}
          slogan={animal.slogan}
          highlited={animal.highlited}
          src={animal.src}
        />
      ))}
      {/* <Section  /> */}
    </div>
  );
}
