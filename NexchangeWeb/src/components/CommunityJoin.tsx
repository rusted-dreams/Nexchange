import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./CommunityJoin.css";

const CommunityJoin: FunctionComponent = () => {
  return (
    <section className="community-join">
      <div className="marketplace-explore">
        <div className="location-search">
          <div className="location-search-child" />
          <h3 className="join-the-nexchange">Join the NexChange Community</h3>
          <div className="delivery-rider1">
            <img
              className="partner-with-us"
              loading="lazy"
              alt=""
              src="/rectangle-20@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="join-team">
        <div className="shop-hasslefree">
          <div className="top-bar">
            <img
              className="footer-icon"
              loading="lazy"
              alt=""
              src="/rectangle-10@2x.png"
            />
          </div>
          <div className="navigation-menu">
            <div className="search-bar">
              <b className="delivery-rider2">Delivery rider</b>
              <div className="earn-by-delivering">
                earn by delivering orders.
              </div>
            </div>
            <div className="navigation-menu-inner">
              <Button
                className="frame-child36"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#000",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#000" },
                  height: 47,
                }}
              >
                Deliver with us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="community-join-inner">
        <div className="frame-parent26">
          <div className="rectangle-parent20">
            <img
              className="frame-child37"
              loading="lazy"
              alt=""
              src="/rectangle-11@2x.png"
            />
            <div className="frame-wrapper10">
              <div className="frame-parent27">
                <div className="partner-with-us-wrapper">
                  <b className="partner-with-us1">Partner with us</b>
                </div>
                <div className="grow-your-business-with-online-parent">
                  <div className="grow-your-business-container">
                    <p className="grow-your-business">
                      Grow your business with online
                    </p>
                    <p className="sales-and-loyalty">
                      {" "}
                      sales and loyalty programs.
                    </p>
                  </div>
                  <div className="frame-wrapper11">
                    <Button
                      className="frame-child38"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "18",
                        background: "#000",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { background: "#000" },
                        height: 43,
                      }}
                    >
                      Collaborate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper12">
            <div className="rectangle-parent21">
              <img
                className="frame-child39"
                loading="lazy"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="search-icon">
                <b className="join-our-team">Join our team</b>
                <div className="search-icon-inner">
                  <div className="contribute-to-top-notch-market-parent">
                    <div className="contribute-to-top-notch">
                      Contribute to top-notch marketplace.
                    </div>
                    <div className="frame-wrapper13">
                      <Button
                        className="frame-child40"
                        disableElevation={true}
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "18",
                          background: "#000",
                          borderRadius: "0px 0px 0px 0px",
                          "&:hover": { background: "#000" },
                          height: 39,
                        }}
                      >
                        Join us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent22">
        <div className="frame-child41" />
        <div className="navigation-links">
          <div className="footer-links">
            <div className="shop-hassle-free">Shop hassle-free</div>
            <div className="enjoy-quick-access-container">
              <p className="enjoy-quick-access">
                Enjoy quick access to campus items with
              </p>
              <p className="our-market-discover">
                our market. Discover a variety of products
              </p>
              <p className="from-local-sellers"> from local sellers.</p>
            </div>
          </div>
        </div>
        <img
          className="frame-child42"
          loading="lazy"
          alt=""
          src="/rectangle-17@2x.png"
        />
      </div>
    </section>
  );
};

export default CommunityJoin;
