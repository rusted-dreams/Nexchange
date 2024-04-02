import { FunctionComponent } from "react";
import "./FrameComponent5.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <div className="rectangle-parent30">
      <div className="frame-child52" />
      <div className="rectangle-parent31">
        <div className="frame-child53" />
        <div className="rectangle-wrapper6">
          <div className="frame-child54" />
        </div>
        <div className="select-images">Select images</div>
        <div className="drag-drop-to-wrapper">
          <div className="drag-drop">{`Drag & drop to`}</div>
        </div>
      </div>
      <div className="frame-parent31">
        <div className="rectangle-wrapper7">
          <img
            className="frame-child55"
            loading="lazy"
            alt=""
            src="/rectangle-105@2x.png"
          />
        </div>
        <div className="rectangle-wrapper8">
          <img
            className="frame-child56"
            loading="lazy"
            alt=""
            src="/rectangle-105@2x.png"
          />
        </div>
        <img
          className="frame-child57"
          loading="lazy"
          alt=""
          src="/rectangle-107@2x.png"
        />
        <div className="rectangle-wrapper9">
          <img
            className="frame-child58"
            loading="lazy"
            alt=""
            src="/rectangle-105@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
