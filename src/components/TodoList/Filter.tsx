import React from "react";
import { useSelector } from "react-redux";

import Link from "./Link";
import { stateProp } from "../../interface";

enum VISIBILITY_FILTER {
  all = "all",
  active = "active",
  completed = "completed",
}

const Filter: React.FC = () => {
  const filter = useSelector((state: stateProp) => state.visibilityFilter);

  return (
    <p>
      <Link filter={VISIBILITY_FILTER.all} active={VISIBILITY_FILTER.all === filter}>
        All
      </Link>
      <Link filter={VISIBILITY_FILTER.active} active={VISIBILITY_FILTER.active === filter}>
        Active
      </Link>
      <Link filter={VISIBILITY_FILTER.completed} active={VISIBILITY_FILTER.completed === filter}>
        Completed
      </Link>
    </p>
  );
};

export default Filter;
