import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catState";
//little star is a generator function that returns a generator object such as yield
function* workGetCatsFetch() {
  const cats = yield call(() => fetch("https://api.thedogapi.com/v1/breeds"));
  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0, 100);
  yield put(getCatsSuccess(formattedCatsShortened));
}
function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}
export default catSaga;
