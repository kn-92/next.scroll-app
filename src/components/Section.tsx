import Image from "next/image";

import styles from "../styles/Section.module.css";

interface SectionProps {
  animalType: String;
  slogan: String;
  highlited: String;
  src: String;
  id: String;
}

const Section = ({ animalType, slogan, highlited, src, id }: SectionProps) => {
  const butterflyJSX = (
    <div className={styles.wrapper} id={id as string}>
      <p className={styles.animalType}>{animalType}</p>

      <p className={styles.slogan}>
        <span className={styles.highlited}>{highlited}</span>
        {slogan}
      </p>

      <Image
        className={styles.photo}
        alt={animalType as string}
        src={src as string}
      />
    </div>
  );
  const elephantJSX = (
    <div className={styles.wrapper} id={id as string}>
      <p className={styles.animalType}>{animalType}</p>

      <p className={styles.slogan}>
        It makes a <span className={styles.highlited}>huge</span> diffrence
      </p>
      <Image
        className={styles.photo}
        alt={animalType as string}
        src={src as string}
      />
    </div>
  );
  if (animalType === "butterfly") return butterflyJSX;
  if (animalType === "elephant") return elephantJSX;
  return (
    <div className={styles.wrapper} id={id as string}>
      <p className={styles.animalType}>{animalType}</p>
      <p className={styles.slogan}>
        {slogan}
        <span className={styles.highlited}>{highlited}</span>
      </p>
      <Image
        className={styles.photo}
        alt={animalType as string}
        src={src as string}
      />
    </div>
  );
};

export default Section;
