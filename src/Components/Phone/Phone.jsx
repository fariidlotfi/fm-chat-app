import Appointment from "../Appointment/Appointment";
import Chat from "../Chat/Chat";
import styles from "./Phone.module.css";

const Phone = () => {
  return (
    <section className={styles.phone}>
      <section className={styles.notch}></section>
      <section className={styles.header}>
        <section className={styles.avatar}>
          <p>{`<`}</p>
          <img src="avatar.jpg" alt="avatar" className={styles.avatar__image} />
          <section className={styles.avatar__info}>
            <span className={styles.avatar__name}>Samuel Green</span>
            <p className={styles.avatar__desc}>Available to Walk</p>
          </section>
        </section>
        <p>{`:`}</p>
      </section>

      {/* Screen */}
      <Chat color={"#BE40FF"} bgColor={"#f2d6ff"} pos={"left"}>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </Chat>
      <Chat color={"#BE40FF"} bgColor={"#f2d6ff"} pos={"left"}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </Chat>
      <Chat color={"black"} bgColor={"rgba(0,0,0,0.0)"} pos={"right"}>
        <img src="dog-image-1.jpg" alt="dog-image" />
        <img src="dog-image-2.jpg" alt="dog-image" />
        <img src="dog-image-3.jpg" alt="dog-image" />
      </Chat>
      <Chat color={"black"} bgColor={"white"} pos={"right"}>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </Chat>
      <Chat color={"black"} bgColor={"white"} pos={"right"}>
        <p>Lorem ipsum dolor?</p>
      </Chat>
      <Chat color={"#BE40FF"} bgColor={"#f2d6ff"} pos={"left"}>
        <p>sadsadsad asdsadasdsad asdsad</p>
      </Chat>

      <Appointment position={"left"}>
        <p>30 Minutes Walk</p>
        <h2>$29</h2>
      </Appointment>
      <Appointment position={"left"}>
        <p>1 Hour Walk</p>
        <h2>$49</h2>
      </Appointment>
      {/* Screen */}

      <section className={styles.message_section}>
        <input
          placeholder="Type a message..."
          className={styles.message_section__input}
        />
        <button className={styles.message_section__button}>{`>`}</button>
      </section>
    </section>
  );
};

export default Phone;
