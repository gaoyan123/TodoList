import { ActionProp } from "../interface/index";

const visibilityFilter = (state = "ALL", action: ActionProp) => {
  switch (action.type) {
    case "SET_VisibilityFilter":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
