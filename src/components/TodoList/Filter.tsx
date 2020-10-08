import React, { useCallback } from "react";
import { VisibilityFilter, StateProp } from "../../interface";
import LinkItem from "./LinkItem";
import { useSelector, useDispatch } from "react-redux";
import { setVisibilityFilter } from "../../action";

// 组装数据列表
const useFilterList = ()=>{
  const visibilityFilter = useSelector((state:StateProp) => state.visibilityFilter);
  const filterList = [
    {
      name: VisibilityFilter.ALL
    },
    {
      name: VisibilityFilter.ACTIVE
    },
    {
      name: VisibilityFilter.COMPLETED
    }
  ]
  return filterList.map(item => ({...item, isActive: item.name === visibilityFilter}))
}

// 将逻辑写在Filter中，LinkItem和Link只作为单纯的展示组件，业务与界面分离
const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filterList = useFilterList();
  const handleClick = useCallback((key:VisibilityFilter) => {
    dispatch(setVisibilityFilter(key));
  },[dispatch]);
  
  return (
    <LinkItem list={ filterList } onClick = { handleClick }>
      Completed
    </LinkItem>
  );
};

export default Filter;
