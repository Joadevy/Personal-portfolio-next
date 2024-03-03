import React from "react";
import styles from "./TechBadge.module.scss";

type Props = {
  tech: string;
};

const TechBadge = ({ tech }: Props) => {
  return (
    <li className={styles.techContainer}>
      <p>{tech}</p>
    </li>
  );
};

export default TechBadge;
