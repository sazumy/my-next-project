import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  title: string;
  sub: string;
};

const Hero = ({ title, sub }: Props) => {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.sub}>{sub}</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt="Hero Image"
        width={4000}
        height={1200}
      />
    </section>
  );
};

export default Hero;
