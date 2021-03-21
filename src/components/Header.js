import React from "react";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        Translate
      </a>
      <a href="/list" className="item">
        Search
      </a>
      <a href="/dropdown" className="item">
        Dropdown
      </a>
      <a href="/accordion" className="item">
        Accordion
      </a>
    </div>
  );
};

export default Header;
