import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import "./Frame.css";

const Frame: FunctionComponent = () => {
  return (
    <div className="vector-parent">
      <img className="frame-child" alt="" />
      <section className="frame-wrapper">
        <header className="frame-parent">
          <div className="nexchange-wrapper">
            <h1 className="nexchange">NexChange</h1>
          </div>
          <div className="menu-button">
            <img
              className="menu-button-child"
              loading="lazy"
              alt=""
              src="/ellipse-5.svg"
            />
            <div className="menu">Menu</div>
          </div>
        </header>
      </section>
      <div className="menu1">Menu</div>
      <section className="buy-and-sell-within-your-area-wrapper">
        <h2 className="buy-and-sell">Buy and Sell within your area</h2>
      </section>
      <section className="frame-container">
        <div className="frame-group">
          <FrameComponent3 />
          <div className="proceed-to-checkout-button-wrapper">
            <div className="proceed-to-checkout-button">
              <div className="rectangle-parent">
                <img
                  className="frame-item"
                  loading="lazy"
                  alt=""
                  src="/rectangle-89@2x.png"
                />
                <div className="formal-shirt-container">
                  <div className="laptop-case">Laptop Case</div>
                </div>
                <div className="frame-div">
                  <div className="frame-parent1">
                    <div className="laptop-case-preview-parent">
                      <div className="laptop-case-preview" />
                      <div className="accessory-name-label">
                        <div className="add-to-cart">-</div>
                      </div>
                      <div className="remove-from-cart">1</div>
                      <div className="wishlist-button">
                        <div className="compare-button">+</div>
                      </div>
                    </div>
                    <div className="search-box">
                      <div className="input-label">
                        <img
                          className="sort-dropdown-menu"
                          loading="lazy"
                          alt=""
                          src="/rectangle-92@2x.png"
                        />
                        <div className="cart-counter-wrapper">
                          <div className="cart-counter">400</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="breadcrumbs">
                <div className="help-centre-link">
                  <div className="order-summary-parent">
                    <div className="order-summary">
                      <div className="rectangle-group">
                        <img
                          className="frame-inner"
                          loading="lazy"
                          alt=""
                          src="/rectangle-90@2x.png"
                        />
                        <img
                          className="rectangle-icon"
                          loading="lazy"
                          alt=""
                          src="/rectangle-91@2x.png"
                        />
                      </div>
                      <div className="order-summary-inner">
                        <div className="order-summary-box-parent">
                          <div className="order-summary-box">
                            <div className="notebooks-wrapper">
                              <div className="notebooks">Notebooks</div>
                            </div>
                            <div className="checkout-button">
                              <div className="checkout-button-child" />
                              <div className="wrapper">
                                <div className="div">-</div>
                              </div>
                              <div className="container">
                                <div className="div1">5</div>
                              </div>
                              <div className="frame">
                                <div className="div2">+</div>
                              </div>
                            </div>
                          </div>
                          <div className="frame-parent2">
                            <div className="formal-shirt-wrapper">
                              <div className="formal-shirt">Formal Shirt</div>
                            </div>
                            <div className="ellipse-parent">
                              <div className="ellipse-div" />
                              <div className="div3">-</div>
                              <div className="div4">2</div>
                              <div className="div5">+</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main-content">
                      <div className="frame-parent3">
                        <div className="rectangle-container">
                          <img
                            className="frame-child1"
                            loading="lazy"
                            alt=""
                            src="/rectangle-92@2x.png"
                          />
                          <div className="empty-space-wrapper">
                            <div className="empty-space">400</div>
                          </div>
                        </div>
                        <div className="rectangle-parent1">
                          <img
                            className="frame-child2"
                            loading="lazy"
                            alt=""
                            src="/rectangle-92@2x.png"
                          />
                          <div className="wrapper1">
                            <div className="div6">2570</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rectangle-parent2">
                  <div className="rectangle-div" />
                  <div className="order-summary-group">
                    <div className="order-summary1">{`Order Summary: `}</div>
                    <div className="rectangle-parent3">
                      <img
                        className="frame-child3"
                        loading="lazy"
                        alt=""
                        src="/rectangle-92@2x.png"
                      />
                      <div className="wrapper2">
                        <div className="div7">3370</div>
                      </div>
                    </div>
                  </div>
                  <div className="proceed-to-checkout-wrapper">
                    <div className="proceed-to-checkout">
                      Proceed to checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="frame-footer">
        <div className="frame-child4" />
        <div className="connect-with-us">Connect with us:</div>
        <img
          className="frame-child5"
          loading="lazy"
          alt=""
          src="/rectangle-19@2x.png"
        />
      </footer>
    </div>
  );
};

export default Frame;
