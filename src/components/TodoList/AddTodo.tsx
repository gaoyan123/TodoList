import React, { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../action";

const AddTodo: React.FC = () => {
  const value = useRef() as React.MutableRefObject<HTMLFormElement>;
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!value.current.value.trim()) return;

      dispatch(addTodo(value.current.value));
      value.current.value = "";
    },
    [dispatch]
  );

  return (
    <div>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <input className="addItemInput" placeholder="有什么需要做的？" ref={value as any} />
      </form>
    </div>
  );
};

export default AddTodo;
