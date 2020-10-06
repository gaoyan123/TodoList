import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";
import { StateProp, TodoProp, VisibilityFilter } from "../../interface";

const getVisibleTodos = (todos: Array<TodoProp>, filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.ACTIVE:
      return todos.filter((t) => !t.completed);
    case VisibilityFilter.COMPLETED:
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
};

const Todos: React.FC = () => {
  const filter = useSelector((state: StateProp) => state.visibilityFilter);
  const todos = useSelector((state: StateProp) => getVisibleTodos(state.todos, filter));

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default Todos;
