import styles from "./Appointment.module.css";

const Appointment = ({ children, position }) => {
  const borderRedius =
    position === "right" ? styles.border_right : styles.border_left;
  return (
    <section
      style={{ float: position }}
      className={`${borderRedius} ${styles.box}`}
    >
      <div className={styles.circle}></div>
      {children}
    </section>
  );
};

export default Appointment;
