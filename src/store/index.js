import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
 
const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action: ', action)
    const returnValue = next(action)
    console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue
  }

function configureStore() {
  return createStore(reducer, {}, applyMiddleware(logger,thunk));
}

const store = configureStore();
export default store;