import React, { useCallback }  from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Link from "./Link";
import { setVisibilityFilter } from "../../action";
import { StateProp, VisibilityFilter, LinkProp } from "../../interface";

const LinkItem: React.FC<LinkProp> = ({children, filter}) => {
  const visibilityFilter = useSelector((state: StateProp) => state.visibilityFilter);
  const dispatch = useDispatch();
  const onFilter = useCallback(
    (filter: VisibilityFilter) => {
      dispatch(setVisibilityFilter(filter));
    },
    [dispatch]
  );

  return (
    <Link active={ filter === visibilityFilter }  onClick={() => onFilter(filter as VisibilityFilter)}>
        {children}
    </Link>
  );
};

export default LinkItem;
