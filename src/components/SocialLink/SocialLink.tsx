import Link from "next/link";
import { FC } from "react";
import styles from "./SocialLink.module.scss";
import { formatLink } from "helpers/helpers";

type props = {
  img: string;
  label: string;
  formatedLabel?: boolean;
  url: string;
  content: string;
  viewBox?: string;
};

const SocialLink: FC<props> = ({
  img,
  viewBox,
  label,
  formatedLabel,
  url,
  content,
}) => {
  return (
    <li className={styles.social__link}>
      <svg
        width="24"
        height="24"
        viewBox={viewBox}
        className={styles.social__icon}
      >
        <path d={img} />
      </svg>
      <span className={styles.social__label}>
        {!formatedLabel ? formatLink(label) : label}
      </span>
      <Link data-content={content} href={url} id="profile-link">
        {content}
      </Link>
    </li>
  );
};

export default SocialLink;
