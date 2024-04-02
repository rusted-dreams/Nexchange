import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import SearchBar from "../components/SearchBar";
import FrameComponent8 from "../components/FrameComponent8";
import "./Frame1.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className="frame-root">
      <main className="search-bar-parent">
        <SearchBar />
        <section className="featured-items-container">
          <div className="search-listings-title-parent">
            <div className="search-listings-title">
              <div className="my-listings-label">
                <div className="my-listings-label-child" />
                <div className="add-new-item-button">
                  <div className="popular-categories-title">
                    <div className="contact-us-icon-wrapper">
                      <img
                        className="contact-us-icon"
                        loading="lazy"
                        alt=""
                        src="/rectangle-1231@2x.png"
                      />
                    </div>
                    <div className="elena-20-years-container">
                      <p className="elena"> Elena</p>
                      <p className="years"> 20 years</p>
                    </div>
                  </div>
                </div>
                <div className="my-listings-label-inner">
                  <div className="student-info-parent">
                    <div className="student-info">Student info:</div>
                    <div className="enrollment-date-08092021-container">
                      <p className="enrollment-date-08092021">
                        Enrollment date: 08/09/2021
                      </p>
                      <p className="user-id-33497372">User id: 33497372</p>
                    </div>
                  </div>
                </div>
                <div className="frame-parent7">
                  <div className="listings-wrapper">
                    <div className="listings">Listings:</div>
                  </div>
                  <div className="frame-parent8">
                    <div className="frame-parent9">
                      <div className="rectangle-parent5">
                        <div className="frame-child9" />
                        <div className="book">Book</div>
                      </div>
                      <div className="rectangle-parent6">
                        <div className="frame-child10" />
                        <div className="electronics">Electronics</div>
                      </div>
                      <div className="rectangle-parent7">
                        <div className="frame-child11" />
                        <div className="furniture">furniture</div>
                      </div>
                    </div>
                    <div className="rectangle-parent8">
                      <div className="frame-child12" />
                      <div className="shoes">Shoes</div>
                    </div>
                  </div>
                </div>
                <div className="my-listings-label-inner1">
                  <div className="recent-orders-parent">
                    <div className="recent-orders">Recent Orders:</div>
                    <div className="rectangle-parent9">
                      <div className="frame-child13" />
                      <div className="laptop-case-with-container">
                        <p className="p">22/03/2024</p>
                        <p className="blank-line">&nbsp;</p>
                        <p className="laptop-case-with">
                          laptop case with charger kit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="rectangle-parent10">
                <div className="frame-child14" />
                <div className="rectangle-parent11">
                  <div className="frame-child15" />
                  <div className="pending-requests">Pending Requests:</div>
                  <div className="frame-parent10">
                    <FrameComponent8
                      orderHistory="Order history"
                      march22="march 22"
                    />
                    <TextField
                      className="frame-textfield"
                      placeholder="Essentials"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "127px",
                          backgroundColor: "#d9d9d9",
                          borderRadius: "0px 0px 0px 0px",
                          fontSize: "68px",
                        },
                        "& .MuiInputBase-input": { color: "#000" },
                      }}
                    />
                  </div>
                </div>
                <div className="rectangle-parent12">
                  <div className="frame-child16" />
                  <div className="recently-viewed">Recently Viewed:</div>
                  <div className="frame-parent11">
                    <FrameComponent8
                      orderHistory="sports shoes"
                      march22="march 23"
                      propPadding="45px 37px 30px 76px"
                      propHeight="182px"
                      propPadding1="25px 0px 0px"
                    />
                    <div className="rectangle-parent13">
                      <div className="frame-child17" />
                      <div className="add-item">Add item</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent14">
              <div className="frame-child18" />
              <div className="previous-orders">Previous Orders</div>
              <div className="frame-parent12">
                <div className="all-categories-cloths-parent">
                  <div className="all-categories-cloths">
                    <img
                      className="all-categories-cloths-child"
                      loading="lazy"
                      alt=""
                      src="/ellipse-12@2x.png"
                    />
                    <div className="all-categories-cloths-inner">
                      <div className="frame-parent13">
                        <div className="vivo-y15c-wrapper">
                          <div className="vivo-y15c">vivo y15C</div>
                        </div>
                        <div className="months-ago">3 months ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-frame">
                    <img
                      className="frame-child19"
                      loading="lazy"
                      alt=""
                      src="/rectangle-137@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-parent14">
                  <div className="frame-parent15">
                    <div className="ellipse-group">
                      <img
                        className="ellipse-icon"
                        loading="lazy"
                        alt=""
                        src="/ellipse-11@2x.png"
                      />
                      <div className="list-new-item-button">
                        <div className="laptop-bag-parent">
                          <div className="laptop-bag">laptop bag</div>
                          <div className="year-ago">1 year ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="ellipse-container">
                      <img
                        className="frame-child20"
                        loading="lazy"
                        alt=""
                        src="/ellipse-13@2x.png"
                      />
                      <div className="frame-wrapper2">
                        <div className="running-shoe-parent">
                          <div className="running-shoe">Running shoe</div>
                          <div className="year-ago-wrapper">
                            <div className="year-ago1">1 year ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper3">
                    <div className="rectangle-parent15">
                      <img
                        className="frame-child21"
                        loading="lazy"
                        alt=""
                        src="/rectangle-137@2x.png"
                      />
                      <img
                        className="frame-child22"
                        loading="lazy"
                        alt=""
                        src="/rectangle-137@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent16">
              <div className="frame-child23" />
              <div className="search-listings">Search listings</div>
              <div className="frame-parent16">
                <div className="rectangle-wrapper1">
                  <img
                    className="frame-child24"
                    loading="lazy"
                    alt=""
                    src="/rectangle-141@2x.png"
                  />
                </div>
                <div className="rectangle-wrapper2">
                  <img
                    className="frame-child25"
                    loading="lazy"
                    alt=""
                    src="/rectangle-142@2x.png"
                  />
                </div>
                <img
                  className="frame-child26"
                  loading="lazy"
                  alt=""
                  src="/rectangle-143@2x.png"
                />
              </div>
              <div className="all-categories-parent">
                <div className="all-categories">All categories</div>
                <div className="sports-wrapper">
                  <div className="sports">Sports</div>
                </div>
                <div className="cloths">Cloths</div>
              </div>
              <div className="frame-parent17">
                <div className="frame-wrapper4">
                  <div className="frame-parent18">
                    <div className="rectangle-wrapper3">
                      <img
                        className="frame-child27"
                        loading="lazy"
                        alt=""
                        src="/rectangle-144@2x.png"
                      />
                    </div>
                    <div className="tech-gadgets">Tech Gadgets</div>
                  </div>
                </div>
                <div className="frame-parent19">
                  <div className="rectangle-wrapper4">
                    <img
                      className="frame-child28"
                      loading="lazy"
                      alt=""
                      src="/rectangle-145@2x.png"
                    />
                  </div>
                  <div className="books">Books</div>
                </div>
                <div className="frame-wrapper5">
                  <div className="rectangle-parent17">
                    <img
                      className="frame-child29"
                      loading="lazy"
                      alt=""
                      src="/rectangle-146@2x.png"
                    />
                    <div className="accessories">Accessories</div>
                  </div>
                </div>
              </div>
              <div className="manage-listings">Manage Listings</div>
              <div className="recommended-items">Recommended items</div>
              <div className="frame-parent20">
                <div className="featured-items-parent">
                  <div className="featured-items">Featured items</div>
                  <div className="categories-wrapper">
                    <div className="categories">Categories</div>
                  </div>
                </div>
                <div className="empty-space1">...</div>
              </div>
              <div className="frame-parent21">
                <div className="search-items-parent">
                  <div className="search-items">Search items</div>
                  <div className="my-listings">My listings</div>
                </div>
                <div className="wrapper3">
                  <div className="div8">...</div>
                </div>
              </div>
              <div className="manage-listing-page">
                <div className="add-new-item">Add new item</div>
                <div className="add-new-item-modal">
                  <div className="frame-parent22">
                    <div className="list-new-item-wrapper">
                      <div className="list-new-item">List new item</div>
                    </div>
                    <div className="div9">...</div>
                  </div>
                </div>
              </div>
              <div className="popular-categories-panel-parent">
                <div className="popular-categories-panel">
                  <div className="popular-categories">Popular categories</div>
                </div>
                <div className="div10">...</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="rectangle-parent18">
        <div className="frame-child30" />
        <div className="contact-us1">Contact us:</div>
        <img
          className="frame-child31"
          loading="lazy"
          alt=""
          src="/rectangle-19@2x.png"
        />
      </footer>
    </div>
  );
};

export default Frame1;
