import { FC, useEffect, useState } from "react";
import type { TMessage } from "../Chat";
import styles from "./Message.module.scss";

type props = {
  message: TMessage;
  isLoading: boolean;
  isLast: boolean;
};

const Message: FC<props> = ({ message, isLoading, isLast }) => {
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
      <div
        className={
          isLoading && isLast && message.from === "bot" ? styles.botLoading : ""
        }
      >
        <div
          className={
            isLoading && message.from === "bot" && isLast
              ? styles.message + " " + styles.dotPulse
              : styles.message
          }
        >
          {message.text}
        </div>
      </div>
    </div>
  );
};

export default Message;
