import React, { Component } from "react";
import "./header.css";

const Header = (props) => {
  const { title } = props;
  return (
    <div className="header">
      <span>{title}</span>
    </div>
  );
};

export default Header;
