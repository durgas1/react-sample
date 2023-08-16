import React, { useState } from "react";
import { createStore } from "redux";

//initial state
const initialState = {
  count: 0, // 1 0
};

//reducer
function reducer(state = initialState, action) {
  // 0 type : INCREMENT / DECREMENT
  switch (
    action.type // INCREMENT
  ) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }; // 0+1 = 1
    case "DECREMENT":
      return { ...state, count: state.count - 1 }; // 1-1 = 0
    default:
      return state;
  }
}

//action
const increment = { type: "INCREMENT" };
const decrement = { type: "DECREMENT" };

//store
const store = createStore(reducer);

function Inicialstate() {
  //   count[(count, setCount)] = useState(store.getState().count);
  const [count, setCount] = useState(store.getState().count);
  function incrementFunction() {
    store.dispatch(increment);
  }

  function decrementFunction() {
    store.dispatch(decrement);
  }

  store.subscribe(() => {
    setCount(store.getState().count); // 1 0
  });

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={incrementFunction}>Increment</button>
      <button onClick={decrementFunction}>Decrement</button>
    </div>
  );
}

export default Inicialstate;
