import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import productReducer  from './component/reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './component/saga/saga';

const allReducers = combineReducers({
  productReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    allReducers,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__&&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);
sagaMiddleware.run(mySaga);

export default store;