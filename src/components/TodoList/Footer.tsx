import React from "react";
import { useSelector } from "react-redux";

import { stateProp } from "../../interface";

const Footer: React.FC = () => {
  const todos = useSelector((state: stateProp) => state.todos);
  const completedLen = () => {
    return todos.filter((t) => t.completed).length;
  };

  return (
    <span className="tips">
      共计{todos ? todos.length : "0"}个,已完成 {completedLen()}个
    </span>
  );
};

export default Footer;
