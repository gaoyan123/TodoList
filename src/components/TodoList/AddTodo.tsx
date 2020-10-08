import React, { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../action";

const AddTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if(inputRef && inputRef.current){
        if (!inputRef.current.value.trim()) return;

        dispatch(addTodo(inputRef.current.value));
        inputRef.current.value = "";
      }
    },
    [dispatch,inputRef]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input className="addItemInput" placeholder="有什么需要做的？" ref={inputRef as any} />
    </form>
  );
};

export default AddTodo;
