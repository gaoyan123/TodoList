import { actionProp } from "../interface/index";

const visibilityFilter = (state = "all", action: actionProp) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
