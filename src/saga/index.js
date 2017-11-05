const {
  all,
  put,
  takeLatest,
} = require('redux-saga/effects');

function* classicReduxActionSaga() {
  console.log('RUN: Entered the classicReduxActionSaga. Putting the action of type "REDUX_SAGA_ACTION" five times');

  yield all([
    yield put({ type: 'REDUX_SAGA_ACTION' }),
    yield put({ type: 'REDUX_SAGA_ACTION' }),
    yield put({ type: 'REDUX_SAGA_ACTION' }),
    yield put({ type: 'REDUX_SAGA_ACTION' }),
    yield put({ type: 'REDUX_SAGA_ACTION' }),
  ]);
}

module.exports = function* saga() {
  console.log('INIT: Entered the main saga once; waiting for any action of type "CLASSIC_REDUX_ACTION"');

  yield takeLatest('CLASSIC_REDUX_ACTION', classicReduxActionSaga);
};
