import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent8.css";

export type FrameComponent8Type = {
  orderHistory?: string;
  march22?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propPadding1?: CSSProperties["padding"];
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  orderHistory,
  march22,
  propPadding,
  propHeight,
  propPadding1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className="rectangle-parent38" style={frameDivStyle}>
      <div className="frame-child68" style={rectangleDivStyle} />
      <div className="order-history">{orderHistory}</div>
      <div className="march-22-wrapper" style={frameDiv1Style}>
        <div className="march-22">{march22}</div>
      </div>
    </div>
  );
};

export default FrameComponent8;
