import Image from "next/image";

import styles from "../styles/Section.module.css";

interface SectionProps {
  animalType: String;
  slogan: String;
  highlited: String;
  src: String;
  id: String;
}

const Section = ({ animalType, slogan, highlited, src }: SectionProps) => {
  console.log(src);
  return (
    <div className={styles.wrapper}>
      <p className={styles.animalType}>{animalType}</p>
      <p className={styles.slogan}>
        {slogan}
        <span className={styles.highlited}>{highlited}</span>
      </p>
      <Image
        className={styles.photo}
        alt={animalType as string}
        src={src as string}
        width={800}
        height={400}
      />
    </div>
  );
};

export default Section;
