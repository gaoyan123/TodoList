import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { removeTodo, toggleTodo } from "../../action";
import { Todoitem } from "../../interface";

const TodoItem: React.FC<Todoitem> = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const handleRemove = useCallback(
    (id: number) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  const onTodoClick = useCallback(
    (id: number) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  return (
    <li className={completed ? "todoItem completed" : "todoItem"}>
      <input type="checkbox" className="todoItemCheck" onClick={() => onTodoClick(id)} />
      {text}
      <button
        className="todoItemBtn"
        onClick={() => {
          handleRemove(id);
        }}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
