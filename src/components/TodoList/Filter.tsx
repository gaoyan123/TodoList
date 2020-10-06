import React from "react";
import { VisibilityFilter } from "../../interface";
import LinkItem from "./LinkItem";

const Filter: React.FC = () => {
  return (
    <p>
      <LinkItem filter={VisibilityFilter.ALL}>
        All
      </LinkItem>
      <LinkItem filter={VisibilityFilter.ACTIVE}>
        Active
      </LinkItem>
      <LinkItem filter={VisibilityFilter.COMPLETED}>
        Completed
      </LinkItem>
    </p>
  );
};

export default Filter;
