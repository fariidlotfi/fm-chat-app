import "./App.css";
import InfoSection from "./Components/InfoSection/InfoSection";
import Phone from "./Components/Phone/Phone";

function App() {
  return (
    <>
      <section className="left-gradient"></section>
      <section className="right-gradient"></section>
      <section className="data">
        <section className="phone">
          <Phone />
        </section>
        <section className="data-text">
          <InfoSection />
        </section>
      </section>
    </>
  );
}

export default App;
