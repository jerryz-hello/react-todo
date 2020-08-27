import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import App from "./App";

// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter,
//   VISIBILITY_FILTERS
// } from "./actions";

const store = createStore(rootReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addTodo("learn about listerners"));
// store.dispatch(addTodo("learn about reducers"));
// store.dispatch(addTodo("learn about store"));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(toggleTodo(2));
// store.dispatch(setVisibilityFilter(VISIBILITY_FILTERS.SHOW_COMPLETED));
// store.dispatch(setVisibilityFilter(VISIBILITY_FILTERS.SHOW_ALL));

// unsubscribe();
