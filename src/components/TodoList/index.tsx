import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AddTodo from "./AddTodo";
import Todos from "./Todos";
import Filter from "./Filter";
import Footer from "./Footer";
import todoApp from "../../reducer";

let store = createStore(todoApp);

const TodoList: React.FC = () => {
  return (
    <Provider store={store}>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        待办事项
      </h1>
      <AddTodo />
      <Todos />
      <Filter />
      <Footer />
    </Provider>
  );
};

export default TodoList;
