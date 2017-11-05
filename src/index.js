const { createStore, applyMiddleware } = require('redux');
const {
  default: createSagaMiddleware,
} = require('redux-saga');
const reducer = require('./reducer');
const saga = require('./saga');

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(saga);

console.log('INITIAL STATE:', store.getState());

store.dispatch({ type: 'CLASSIC_REDUX_ACTION' });
console.log('DISPATCHED AN ACTION OF TYPE "CLASSIC_REDUX_ACTION"');

console.log('UPDATED STATE:', store.getState());

module.exports = store;
