import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Translate
      </Link>
      <Link href="/list" className="item">
        MicroPedia
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/accordion" className="item">
        Accordion
      </Link>
    </div>
  );
};

export default Header;
