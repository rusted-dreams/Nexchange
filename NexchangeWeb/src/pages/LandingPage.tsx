import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import CommunityJoin from "../components/CommunityJoin";
import FrameComponent from "../components/FrameComponent";
import "./LandingPage.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="landing-page">
      <FrameComponent2 />
      <FrameComponent1 />
      <CommunityJoin />
      <FrameComponent />
    </div>
  );
};

export default LandingPage;
