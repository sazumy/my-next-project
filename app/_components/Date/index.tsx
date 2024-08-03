import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  date?: string;
};

const Date = ({ date }: Props) => {
  return (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
      {date}
    </span>
  );
};

export default Date;
