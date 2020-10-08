import React from "react";
import { useSelector } from "react-redux";

import { StateProp } from "../../interface";

const Footer: React.FC = () => {
  const todos = useSelector((state: StateProp) => state.todos);
  const allLen = todos.length;
  const completedLen = todos.filter((t) => t.completed).length;

  return (
  <span className="tips">
    共计{allLen}个,已完成 {completedLen}个
  </span>
  );
};

export default Footer;
