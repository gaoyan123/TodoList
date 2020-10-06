import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { linkProp, VISIBILITY_FILTER } from "../../interface";
import { setVisibilityFilter } from "../../action";

const Filter: React.FC<linkProp> = ({ children, filter, active }) => {
  const dispatch = useDispatch();
  const onClick = useCallback(
    (filter: VISIBILITY_FILTER) => {
      dispatch(setVisibilityFilter(filter));
    },
    [dispatch]
  );

  if (active) {
    return <span className="activeLink"> {children} </span>;
  }
  return (
    <button className="link" onClick={() => onClick(filter as VISIBILITY_FILTER)}>
      {" "}
      {children}{" "}
    </button>
  );
};

export default Filter;
