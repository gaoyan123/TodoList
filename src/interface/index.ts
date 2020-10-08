  export interface TodoProp {
  id: number;
  text: string;
  completed: boolean;
}

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
  active: boolean
}

export interface FilterProp {
  list: LinkItemProp[],
  onClick: (key:VisibilityFilter) => void;
}

export interface LinkItemProp {
  name: VisibilityFilter,
  isActive: boolean
}

export interface TipsProp {
  totalNum: number,
  completedNum:  number
}