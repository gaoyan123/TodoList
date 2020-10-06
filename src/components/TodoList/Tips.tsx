import React from "react";
import { TipsProp } from "../../interface"

const Footer: React.FC<TipsProp> = ({totalNum, completedNum}) => {
  return (
    <span className="tips">
      共计{totalNum}个,已完成 {completedNum}个
    </span>
  );
};

export default Footer;
