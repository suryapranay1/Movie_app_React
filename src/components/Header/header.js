import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <span onClick={() => window.scroll(0, 0)} className="header">
        🎥Cinema Sphere🎥
      </span>
    </>
  );
};

export default Header;
