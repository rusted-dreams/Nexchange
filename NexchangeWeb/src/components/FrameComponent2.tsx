import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./FrameComponent2.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <header className="landing-page-inner">
      <div className="nexchange-parent">
        <h1 className="nexchange1">NexChange</h1>
        <div className="frame-wrapper6">
          <div className="frame-parent23">
            <div className="frame-wrapper7">
              <Button
                className="frame-button"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "22",
                  background: "#000",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#000" },
                  height: 42,
                }}
              >
                login
              </Button>
            </div>
            <div className="frame-wrapper8">
              <div className="rectangle-parent19">
                <div className="frame-child32" />
                <b className="signup">signup</b>
              </div>
            </div>
            <img
              className="frame-child33"
              loading="lazy"
              alt=""
              src="/rectangle-123@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
