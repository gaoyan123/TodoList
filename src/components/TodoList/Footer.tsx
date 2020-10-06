import React from "react";
import { useSelector } from "react-redux";

import  Tips from "./Tips"
import { StateProp } from "../../interface";

const Footer: React.FC = () => {
  const todos = useSelector((state: StateProp) => state.todos);
  const completedLen = () => {
    return todos.filter((t) => t.completed).length;
  };

  return (
    <Tips totalNum={todos.length} completedNum = {completedLen()} />
  );
};

export default Footer;
