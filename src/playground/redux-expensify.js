import { createStore, combineReducers } from "redux";
import { v1 as uuid } from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt,
    },
  };
};

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD EXPENSE":
      return [...state, action.expense];
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const demoState = {
  expenses: [
    {
      id: "pqrs",
      description: "Rent amount",
      note: "This is myn last payment",
      amount: 45300,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //Date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
);

store.dispatch(addExpense({ description: "rent payment", amount: 2000 }));

store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());
