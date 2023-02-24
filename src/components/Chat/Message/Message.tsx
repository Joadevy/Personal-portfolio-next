import { FC, useEffect, useState } from "react";
import type { TMessage } from "../Chat";
import styles from "./Message.module.scss";

type props = {
  message: TMessage;
};

const Message: FC<props> = ({ message }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={
        isActive
          ? styles[`${message.from}-msg`] + " " + styles.messageActive
          : styles[`${message.from}-msg`]
      }
    >
      <span className={styles.message}>{message.text}</span>
    </div>
  );
};

export default Message;
