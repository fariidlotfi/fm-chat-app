import styles from "./Chat.module.css";

const Chat = ({ color, bgColor, pos, children }) => {
  const borderRedius =
    pos === "right" ? styles.border_right : styles.border_left;
  return (
    <section
      className={`${borderRedius} ${styles.box}`}
      style={{ float: pos, background: bgColor, color: color }}
    >
      {children}
    </section>
  );
};

export default Chat;
