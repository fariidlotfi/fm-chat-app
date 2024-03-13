import styles from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <section className={styles.box}>
      <h1 className={styles.title}>Simple Booking</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra
        accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel
        elit scelerisque
      </p>
    </section>
  );
};

export default InfoSection;
