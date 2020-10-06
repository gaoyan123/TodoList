import React, { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../action";

const AddTodo: React.FC = () => {
  const ref = useRef() as React.MutableRefObject<HTMLFormElement>;
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!ref.current.value.trim()) return;

      dispatch(addTodo(ref.current.value));
      ref.current.value = "";
    },
    [dispatch,ref]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input className="addItemInput" placeholder="有什么需要做的？" ref={ref as any} />
    </form>
  );
};

export default AddTodo;
