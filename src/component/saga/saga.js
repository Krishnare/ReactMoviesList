import { call, put, takeEvery, select, cancel, fork } from "redux-saga/effects";
import { delay } from "redux-saga";
import { axios } from "axios";

import {
  REQUEST_API_DATA,
  receiveApiData,
  CLICK_REQUEST_DATA,
  clickStoreData
} from "../actions/actions";
import { fetchData } from "../api/api";
import { fetchDetailMovie } from "../api/fetchDetailMovie";
// export const FETCH_USERS  = 'FETCH_USERS';

const getPage = state => state.nextPage;
function* fetchProducts(action) {
  console.log("Hello Fetch");
  try {
    const page = yield select(getPage);
    const dataDetail = yield call(fetchData, page);
    console.log("saga.js=>dataDetail", dataDetail);
    yield put(receiveApiData(dataDetail));
  } catch (e) {
    console.log(e);
  }
}
function* clickUpdateData(action) {
  try {
    while (true) {
      console.log("ACTIONS", action.params);

      const page = yield select(getPage);
      const dataDetail = yield call(fetchDetailMovie, action.params, action.data, page);
      yield put(clickStoreData(dataDetail));
      // const task = yield fork(fetchDetailMovie);
      yield delay(5000);
    }
  } finally {
    if (yield cancelled()) yield put(actions.requestFailure("Sync cancelled!"));
  }
}
function* mySaga() {
  yield takeEvery(CLICK_REQUEST_DATA, clickUpdateData);
  yield takeEvery(REQUEST_API_DATA, fetchProducts);
}
export default mySaga;
