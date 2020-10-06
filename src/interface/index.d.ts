import todos from "../reducer/todos";

export interface todoProp {
  id: number;
  text: string;
  completed: boolean;
}

export interface todoItemProp extends todoProp {}

export enum VISIBILITY_FILTER {
  all = "all",
  active = "active",
  completed = "completed",
}

export interface actionProp {
  type: string;
  [propName: string]: any;
}

export interface stateProp {
  todos: Array<todoProp>;
  visibilityFilter: VISIBILITY_FILTER;
}

export interface linkProp {
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  [propName: string]: any;
  filter?: VISIBILITY_FILTER;
}
