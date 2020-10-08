import React, { useCallback } from "react";

import Link from "./Link";
import { FilterProp } from "../../interface";

const LinkItem: React.FC<FilterProp> = ({ children, list, onClick}) => {
  const handleClick = useCallback((key) => {
    if(onClick) onClick(key);
  }, [onClick]);
  
  return (
    // 返回fragment
    <>
      {
        list.map(item => (
          <Link key={item.name} active={item.isActive} onClick={() => handleClick(item.name)}>
            {children}
          </Link>)
        )
      }
    </>
  );
};

export default LinkItem;
