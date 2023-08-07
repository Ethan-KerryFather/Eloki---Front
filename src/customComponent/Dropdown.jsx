import React from "react";
import "../App.scss";
function Dropdown(props) {
  return (
    <article
      className={`${
        props.visibility ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"
      }`}
    >
      {props.visibility && props.children}
    </article>
  );
}

export default Dropdown;
