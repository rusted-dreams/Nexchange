import { FunctionComponent } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import "./PROFILOUTENTE.css";

const PROFILOUTENTE: FunctionComponent = () => {
  return (
    <div className="profilo-utente">
      <FrameComponent7 />
      <FrameComponent6 />
      <div className="profilo-utente-child" />
      <section className="frame-section">
        <div className="frame-parent4">
          <div className="rectangle-wrapper">
            <div className="frame-child6" />
          </div>
          <div className="go">Go</div>
        </div>
        <div className="list-your-item-wrapper">
          <h2 className="list-your-item">List your item</h2>
        </div>
      </section>
      <div className="profilo-utente-item" />
      <section className="frame-parent5">
        <div className="frame-parent6">
          <div className="add-images-wrapper">
            <h1 className="add-images">Add images</h1>
          </div>
          <FrameComponent5 />
        </div>
        <FrameComponent4 />
      </section>
      <footer className="rectangle-parent4">
        <div className="frame-child7" />
        <div className="contact-us">Contact us:</div>
        <div className="frame-child8" />
      </footer>
    </div>
  );
};

export default PROFILOUTENTE;
