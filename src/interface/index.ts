  export interface TodoProp {
  id: number;
  text: string;
  completed: boolean;
}

export interface Todoitem extends TodoProp {}

export enum VisibilityFilter {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

export interface ActionProp {
  type: string;
  [propName: string]: any;
}

export interface StateProp {
  todos: Array<TodoProp>;
  visibilityFilter: VisibilityFilter;
}

export interface LinkProp {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  [propName: string]: any;
  filter?: VisibilityFilter;
}

export interface TipsProp {
  totalNum: number,
  completedNum:  number
}