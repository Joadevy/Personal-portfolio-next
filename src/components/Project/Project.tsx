import { FC } from "react";
import styles from "./project.module.scss";
import Image from "next/image";

type props = {
  title: string;
  desc: string;
  webUrl: string;
  repoUrl: string;
  img: string;
};

const Project: FC<props> = ({ title, desc, webUrl, repoUrl, img }) => {
  return (
    <div className={styles.projectTitle}>
      <div className={styles.projectIcon}>
        <Image
          width={35}
          height={35}
          className={styles.imgProject}
          src={img}
          alt=""
          style={{ width: "auto" }}
        />
      </div>
      <div className={styles.projectDesc}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className={styles.projectLinks}>
        <a target="_blank" href={webUrl} rel="noreferrer">
          Web
        </a>
        <a target="_blank" href={repoUrl} rel="noreferrer">
          Github
        </a>
      </div>
    </div>
  );
};

export default Project;
