import React from "react";
import "./Header.css";
class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    console.log("header");
    return (
      <div>
        <h1>Robofriends</h1>
      </div>
    );
  }
}
export default Header;
