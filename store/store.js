import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducers";

const initalState = {
  appName: "Concrete Snap",
};

const middleware = [thunk];

const makeStore = () =>
  createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export const wrapper = createWrapper(makeStore);
