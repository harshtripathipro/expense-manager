import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy,
  };
};
const resetCount = () => {
  return {
    type: "RESET",
  };
};

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };

    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
});
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 6 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 7 }));

store.dispatch(resetCount());
