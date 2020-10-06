import React from "react";
import { LinkProp } from "../../interface";

const Filter: React.FC<LinkProp> = ({ children, active, onClick }) => {
  if (active) {
    return <span className="activeLink"> {children} </span>;
  }
  
  return (
    <button className="link" onClick={ onClick }>
      {children}
    </button>
  );
};

export default Filter;
