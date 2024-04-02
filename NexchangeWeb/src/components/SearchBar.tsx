import { FunctionComponent } from "react";
import "./SearchBar.css";

const SearchBar: FunctionComponent = () => {
  return (
    <header className="search-bar1">
      <div className="categories-container" />
      <div className="all-categories-title">
        <h2 className="profile">Profile</h2>
      </div>
      <div className="tech-gadgets-category">
        <div className="my-listings-my">My Listings My Requests Account</div>
      </div>
      <div className="accessories-category">
        <div className="manage-listings-button">
          <div className="manage-listings-button-child" />
          <div className="edit-profile">edit profile</div>
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
