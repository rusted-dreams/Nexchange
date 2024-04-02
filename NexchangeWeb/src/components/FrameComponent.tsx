import { FunctionComponent } from "react";
import "./FrameComponent.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="rectangle-parent23">
      <div className="frame-child43" />
      <div className="frame-parent28">
        <div className="connect-with-us-wrapper">
          <div className="connect-with-us2">Connect with us:</div>
        </div>
        <img
          className="contact-box-icon"
          loading="lazy"
          alt=""
          src="/rectangle-19@2x.png"
        />
      </div>
      <div className="dashboard-display">
        <div className="dashboard-regular-deals-container">
          <p className="dashboard">Dashboard</p>
          <p className="blank-line1">&nbsp;</p>
          <p className="regular-deals1">Regular Deals</p>
          <p className="blank-line2">&nbsp;</p>
          <p className="my-orders1">My Orders</p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
