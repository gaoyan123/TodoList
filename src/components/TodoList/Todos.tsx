import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";
import { stateProp, todoProp } from "../../interface";

enum VISIBILITY_FILTER {
  all = "all",
  active = "active",
  completed = "completed",
}

const getVisibleTodos = (todos: Array<todoProp>, filter: VISIBILITY_FILTER) => {
  switch (filter) {
    case VISIBILITY_FILTER.active:
      return todos.filter((t) => !t.completed);
    case VISIBILITY_FILTER.completed:
      return todos.filter((t) => t.completed);
    case VISIBILITY_FILTER.active:
    default:
      return todos;
  }
};

const Todos: React.FC = () => {
  const filter = useSelector((state: stateProp) => state.visibilityFilter);
  const todos = useSelector((state: stateProp) => getVisibleTodos(state.todos, filter));

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default Todos;
