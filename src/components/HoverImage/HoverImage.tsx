"use client";
import { FC, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./HoverImage.module.scss";

type props = {
  src: StaticImageData;
  hoverSrc: StaticImageData;
};

const HoverImage: FC<props> = ({ src, hoverSrc }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <div className={styles.container}>
      <Image
        src={hovered ? hoverSrc : src}
        alt={""}
        fill={true}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        priority={true}
        sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 35vw,
              25vw"
      />
    </div>
  );
};

export default HoverImage;
